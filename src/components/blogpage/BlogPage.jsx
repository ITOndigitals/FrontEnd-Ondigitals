import React, { useEffect, useState } from "react";
import classes from "./BlogPage.module.scss";
import { useBoundStore } from "@/store/useBoundStore";
import BlogsHeader from "./components/BlogsHeader/BlogsHeader";
import BlogList from "./components/BlogsListing/BlogList";
import BlogFooter from "./components/BlogsFooter/BlogFooter";
import { SearchPostsByKey } from "@/pages/api/graphql";

const BlogPage = ({ blogsData }) => {
  const setToDark = useBoundStore((state) => state.setToDark);
  const [renderData, setRenderData] = useState(blogsData);
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
  //Khi tới các section homepage, cho ẩn header chính để hiện section header
  //nên cần set lại xuất hiện
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

  const onChangePageHandler = (pageNum) => {
    console.log(pageNum);
  };

  const searchBlogHandler = async (searchValue) => {
    const searchedPosts = await SearchPostsByKey({ key: searchValue.text });
    setRenderData(searchedPosts);
  };

  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader />
      <BlogList blogsData={renderData} />
      <BlogFooter onChangePage={onChangePageHandler} />
    </div>
  );
};

export default BlogPage;
