import React, { useEffect, useState } from "react";
import classes from "./BlogPage.module.scss";
import { useBoundStore } from "@/store/useBoundStore";
import BlogsHeader from "./components/BlogsHeader/BlogsHeader";
import BlogList from "./components/BlogsListing/BlogList";
import BlogFooter from "./components/BlogsFooter/BlogFooter";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_POSTS_BY_FILTER } from "@/pages/api/graphqlApollo";

const BlogPage = ({ blogsData, textContent }) => {
  if (!blogsData) {
    return null;
  }
  const pagedaData = textContent?.pageBlog;
  const { nodes, pageInfo } = blogsData;
  const { hasNextPage, endCursor } = pageInfo;
  const { locale } = useRouter();
  const language = locale.toUpperCase();
  const first = 12;
  const [renderData, setRenderData] = useState(nodes);
  const [isNexPage, setIsNexPage] = useState(hasNextPage);
  const [orderBy, setOrderBy] = useState("DESC");
  const [keySearch, setKeySearch] = useState("");
  const [idCategory, setIdCategory] = useState(0);
  const [isFilterPanigation, setIsFilterPanigation] = useState(endCursor);
  const [isUseFilter, setIsUseFilter] = useState(false);

  // changel color header
  const headerIsDark = useBoundStore((state) => state.isDark);
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );
  const setChangeStickyIsAllowed = useBoundStore(
    (state) => state.setChangeStickyIsAllowed
  );
  const setIsInSubPageState = useBoundStore(
    (state) => state.setIsInSubPageState
  );
  const { setToDark } = useBoundStore();

  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
    setIsInSubPageState(true);
    const header = document.querySelector(".main-header-g");
    if (header) {
      header.classList.remove("hide");
    }
    setHeaderCanChangeColor();
    setToDark();
  }, [headerIsDark]);

  // call api
  const [filterPosts, { loading, error, data }] =
    useLazyQuery(GET_POSTS_BY_FILTER);

  // function search posts by key word
  const onSearchPost = (searchValue) => {
    filterPosts({
      variables: {
        key: searchValue,
        language: language,
        order: orderBy,
        first: first,
        after: "",
        idCategory: idCategory,
      },
    });
    setKeySearch(searchValue);
    setIsUseFilter(true);
  };

  // function sort posts
  const handleSortPosts = (keySort) => {
    filterPosts({
      variables: {
        key: keySearch,
        language: language,
        order: keySort,
        first: first,
        after: "",
        idCategory: idCategory,
      },
    });
    setKeySearch("");
    setOrderBy(keySort);
    setIsUseFilter(true);
  };
  // function filter by category posts
  const filterCategory = (idCategory) => {
    let intValueCategory = Number(idCategory);
    filterPosts({
      variables: {
        key: keySearch,
        language: language,
        order: orderBy,
        first: first,
        after: "",
        idCategory: intValueCategory,
      },
    });
    setKeySearch("");
    setIdCategory(intValueCategory);
    setIsUseFilter(true);
  };
  const [count, setCount] = useState(0);

  // handle panigation
  useEffect(() => {
    const listItems = document.querySelectorAll("#list-posts-ods li");
    const lastListItem = listItems[listItems.length - 2];
    let observer;
    console.log(data, "hello");
    const observeLastItem = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Thực hiện filterPosts khi phần tử cuối cùng thấy được
          filterPosts({
            variables: {
              key: keySearch,
              language: language,
              order: orderBy,
              first: first,
              idCategory: idCategory,
              after: isFilterPanigation || "",
            },
          });
        }
      });
    };

    if (lastListItem) {
      console.log("4444");
      observer = new IntersectionObserver(observeLastItem, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });

      observer.observe(lastListItem);
    }

    return () => {
      if (observer && lastListItem) {
        observer.unobserve(lastListItem);
      }
    };
  }, [isFilterPanigation]);
  // update posts data
  useEffect(() => {
    if (data) {
      const dataPosts = data.posts;
      const { nodes, pageInfo } = dataPosts;
      const { endCursor, hasNextPage: checkIsHasNextPage } = pageInfo;
      setIsFilterPanigation(endCursor);
      setIsNexPage(checkIsHasNextPage);
      if (isUseFilter && nodes.length > 0) {
        setRenderData(nodes);
        setIsUseFilter(false);
        console.log(endCursor, isFilterPanigation);
      }
      if (isNexPage && !isUseFilter) {
        console.log(3);
        setRenderData((prevData) => [...prevData, ...nodes]);
        setIsUseFilter(false);
      }
      if (!isNexPage) {
        setIsFilterPanigation(endCursor);
        setIsFilterPanigation("");
        console.log(isFilterPanigation);
      }
      if (nodes.length === 0 && (keySearch || idCategory)) {
        if (renderData.length > 0 && !isUseFilter) {
          setRenderData((prevData) => [...prevData, ...nodes]);
        } else {
          setKeySearch("");
          setRenderData([]);
        }
      }
      setCount((prevCount) => prevCount + 1);

    }
  }, [data]);

  // update data when change lanuguage
  useEffect(() => {
    setRenderData(nodes);
    setIsFilterPanigation(endCursor);
  }, [blogsData]);

  useEffect(() => {
    const nextElement = document.getElementById("__next");
    if (nextElement) {
      nextElement.style.backgroundColor = "#F6F8FA";
    }
  }, []);
  console.log(data, isFilterPanigation,count);
  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader
        onSearch={onSearchPost}
        handleSort={handleSortPosts}
        filterCategory={filterCategory}
        dataContent={pagedaData}
      />
      <BlogList blogsData={renderData} loading={loading} error={error} />
      {/* <BlogFooter onChangePage={onChangePageHandler} /> */}
    </div>
  );
};

export default BlogPage;
