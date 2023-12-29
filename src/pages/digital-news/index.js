import React from "react";
import BlogPage from "@/components/blogpage/BlogPage";
import { GetSeoAndContentBlogPage, getDataPageBlog } from "../api/graphql";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";

const parse = require("html-react-parser");

export default function Blog({ allPosts, seoHead, dataFooter, dataHeader }) {
  const dataHead = seoHead?.seo?.fullHead;
  return (
    <>
      <Head>{dataHead && parse(dataHead)}</Head>
      <Header data={dataHeader} />
      <BlogPage blogsData={allPosts} textContent = {seoHead}/>
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 45359;
  const [allPosts, dataSeo, dataHeader] = await Promise.all([
    getDataPageBlog(language, 12, null, null, null),
    GetSeoAndContentBlogPage(idPage),
    getDataMenu(language),
  ]);

  const translation = dataSeo?.translations?.find(
    (t) => t.language.code === language
  );
  const seoHead = translation
    ? await GetSeoAndContentBlogPage(translation.pageId)
    : dataSeo;
  const dataFooter = await getTranslatedDataFooter(language);
  return {
    props: {
      allPosts,
      seoHead,
      dataFooter,
      dataHeader,
    },
  };
};
