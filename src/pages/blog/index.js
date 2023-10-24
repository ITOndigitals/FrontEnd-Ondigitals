import React from "react";
import BlogPage from "@/components/blogpage/BlogPage";
import { SearchPostsByKey, getDataForNewAndInsightsSection } from "../api/graphql";

export default function Blog({ allPosts, datapost }) {
  console.log(datapost);
  const onSearch = (item) => {
    console.log(item);
  };
  return <BlogPage blogsData={allPosts} onSearch={onSearch} />;
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const allPosts = await getDataForNewAndInsightsSection(language);
  const datapost = await SearchPostsByKey("test1111111", language);
  return { props: { allPosts, datapost } };
};
