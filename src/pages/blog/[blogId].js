import BlogDetail from "@/components/blogdetailpage/BlogDetail";
import {
  GetPostDetailBySlug,
  getDataForNewAndInsightsSection,
} from "../api/graphql";

const BlogDetailPage = ({ allPosts, dataPostDetail }) => {
  return (
    <>
      <BlogDetail relatedPosts={allPosts} postDetail={dataPostDetail} />
    </>
  );
};

const redirectTo404 = (res) => {
  res.writeHead(302, { Location: "/404" });
  res.end();
};

export const getServerSideProps = async (context) => {
  const { query, res } = context;
  const postId = query.blogId;
  const dataPostDetail = await GetPostDetailBySlug(postId);
  if (!dataPostDetail) {
    redirectTo404(res);
    return { props: {} };
  }

  const allPosts = await getDataForNewAndInsightsSection();
  return { props: { allPosts, dataPostDetail } };
};

export default BlogDetailPage;
