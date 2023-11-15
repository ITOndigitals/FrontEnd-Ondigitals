import React, { useEffect, useState } from "react";
import classes from "./BlogPage.module.scss";
import { useBoundStore } from "@/store/useBoundStore";
import BlogsHeader from "./components/BlogsHeader/BlogsHeader";
import BlogList from "./components/BlogsListing/BlogList";
import BlogFooter from "./components/BlogsFooter/BlogFooter";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_POSTS_BY_FILTER } from "@/pages/api/graphqlApollo";

const BlogPage = ({ blogsData }) => {
  const { nodes, pageInfo } = blogsData;
  const { hasNextPage } = pageInfo;
  const { locale } = useRouter();
  const language = locale.toUpperCase();
  const first = 12;
  const [renderData, setRenderData] = useState(nodes);
  const [isNexPage, setIsNexPage] = useState(hasNextPage);
  const [orderBy, setOrderBy] = useState("DESC");
  const [keySearch, setKeySearch] = useState("");
  const [isFilterPanigation, setIsFilterPanigation] = useState(
    pageInfo.endCursor || ""
  );
  const [isUseFilter, setIsUseFilter] = useState(false);
  const setToDark = useBoundStore((state) => state.setToDaryk);

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

  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
    setIsInSubPageState(true);
    const header = document.querySelector(".main-header-g");
    if (header) {
      header.classList.remove("hide");
    }
    setHeaderCanChangeColor();
    setToDark;
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
      },
    });
    setKeySearch("");
    setOrderBy(keySort);
    setIsUseFilter(true);
  };

  // handle panigation
  useEffect(() => {
    const listItems = document.querySelectorAll("#list-posts-ods li");
    const lastListItem = listItems[listItems.length - 1];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filterPosts({
              variables: {
                key: keySearch,
                language: language,
                order: orderBy,
                first: first,
                after: isFilterPanigation || "",
              },
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );
    if (lastListItem) {
      observer.observe(lastListItem);
    }
    return () => {
      if (lastListItem) {
        observer.unobserve(lastListItem);
      }
    };
  }, [isFilterPanigation]);

  // update posts data
  useEffect(() => {
    if (data) {
      const { nodes, pageInfo } = data.posts;
      setIsFilterPanigation(pageInfo.endCursor);
      setIsNexPage(pageInfo.hasNextPage);
      if (isUseFilter && nodes.length > 0) {
        setRenderData(nodes);
        setIsUseFilter(false);
      }
      if (isNexPage && !isUseFilter) {
        setRenderData([...renderData, ...nodes]);
        setIsUseFilter(false);
      }
      if (!isNexPage) {
        setIsFilterPanigation("");
      }
      if (nodes.length === 0 && keySearch) {
        setKeySearch("")
        setRenderData([]);
      }
    }
  }, [data]);

  // update data when change lanuguage
  useEffect(() => {
    console.log(4);
    setRenderData(nodes);
  }, [nodes]);

  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader onSearch={onSearchPost} handleSort={handleSortPosts} />
      <BlogList blogsData={renderData} loading={loading} error={error} />
      {/* <BlogFooter onChangePage={onChangePageHandler} /> */}
    </div>
  );
};

export default BlogPage;
