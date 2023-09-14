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
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );
  const headerIsDark = useBoundStore((state) => state.isDark);

  useEffect(() => {
    if (!headerIsDark) {
      setToDark();
      //setHeaderCanNotChangeColor();
    } else {
      setHeaderCanNotChangeColor();
    }
  }, [headerIsDark]);

  const onChangePageHandler = (pageNum) => {
    console.log(pageNum);
  };


  const  searchBlogHandler = async (searchValue) => {
    const searchedPosts = await SearchPostsByKey({ key: searchValue.text });
    setRenderData(searchedPosts) 
  }

  return (
    <div className={`container ${classes.container}`}>
      <BlogsHeader />
      <BlogList blogsData={renderData} />
      <BlogFooter onChangePage={onChangePageHandler} />
    </div>
  );
};

export default BlogPage;
