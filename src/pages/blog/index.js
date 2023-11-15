import React from "react";
import BlogPage from "@/components/blogpage/BlogPage";
import { getDataPageBlog } from "../api/graphql";

export default function Blog({ allPosts }) {
  return (
    <>
      <BlogPage blogsData={allPosts} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const allPosts = await getDataPageBlog(language, 12, null, null, null);
  return { props: { allPosts } };
};
