import BlogPage from "@/components/blogpage/BlogPage";
import { getDataForNewAndInsightsSection } from "../api/graphql";

export default function Blog({ allPosts }) {
  return (
    <>
      <BlogPage blogsData={allPosts} />
    </>
  );
}

export const getServerSideProps = async ({locale}) => {
  const allPosts = await getDataForNewAndInsightsSection(locale);
  return { props: { allPosts } };
};
