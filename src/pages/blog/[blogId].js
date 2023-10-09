import BlogDetail from "@/components/blogdetailpage/BlogDetail";
import {
  GetListSlugPosts,
  GetPostDetailBySlug,
  getDataForNewAndInsightsSection,
} from "../api/graphql";

export async function getStaticPaths() {
  const posts = await GetListSlugPosts();
  const paths = posts.map((post) => ({
    params: { blogId: post.slug },
    locale: post.language.code.toLowerCase(),
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const dataPostDetail = await GetPostDetailBySlug(params.blogId);
  const relatedPosts = await getDataForNewAndInsightsSection();
  return {
    props: {
      dataPostDetail,
      relatedPosts,
    },
  };
}
const BlogDetailPage = ({ dataPostDetail, relatedPosts }) => {
  return (
    <>
      <BlogDetail postDetail={dataPostDetail} relatedPosts={relatedPosts} />
    </>
  );
};
export default BlogDetailPage;
