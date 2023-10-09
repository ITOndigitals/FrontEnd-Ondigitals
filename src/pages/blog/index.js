import React from "react";
import BlogPage from "@/components/blogpage/BlogPage";
import { getDataForNewAndInsightsSection } from "../api/graphql";

export default function Blog({ allPosts }) {
  return <BlogPage blogsData={allPosts} />;
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const allPosts = await getDataForNewAndInsightsSection(language);
  return { props: { allPosts } };
};
