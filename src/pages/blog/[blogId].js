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
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const language = locale.toUpperCase();
  const dataPostDetail = await GetPostDetailBySlug(params.blogId, language);
  const relatedPosts = await getDataForNewAndInsightsSection(language);
  if (!dataPostDetail?.postBy) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataPostDetail,
      relatedPosts,
    },
  };
}
const BlogDetailPage = ({ dataPostDetail, relatedPosts }) => {
  console.log(dataPostDetail);
  return (
    <>
      <BlogDetail postDetail={dataPostDetail} relatedPosts={relatedPosts} />
    </>
  );
};
export default BlogDetailPage;
