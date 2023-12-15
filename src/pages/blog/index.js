import React from "react";
import BlogPage from "@/components/blogpage/BlogPage";
import { GetSeoBlogPage, getDataPageBlog } from "../api/graphql";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { getTranslatedDataFooter } from "../api/graphqlHeaderFooter";

const parse = require("html-react-parser");

export default function Blog({ allPosts, seoHead, dataFooter }) {
  const dataHead = seoHead?.nodes?.[0]?.seo?.fullHead;
  return (
    <>
      <Head>{dataHead && parse(dataHead)}</Head>
      <Header />
      <BlogPage blogsData={allPosts} />
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 45359;
  const [allPosts, dataSeo] = await Promise.all([
    getDataPageBlog(language, 12, null, null, null),
    GetSeoBlogPage(idPage),
  ]);

  const translation = dataSeo.nodes?.[0]?.translations.find(
    (t) => t.language.code === language
  );
  const seoHead = translation
    ? await GetSeoBlogPage(translation.pageId)
    : dataSeo;
  const dataFooter = await getTranslatedDataFooter(language);
  return {
    props: {
      allPosts,
      seoHead,
      dataFooter,
    },
  };
};
