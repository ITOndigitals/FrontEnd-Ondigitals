import React from "react";
import HomePage from "@/components/homepage/HomePage";
import {
  GetDataHomepage,
  getDataForNewAndInsightsSection,
} from "./api/graphql";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { getDataMenu, getTranslatedDataFooter } from "./api/graphqlHeaderFooter";

const parse = require("html-react-parser");

export default function Home({ allPosts, dataHomepage, dataFooter,dataHeader }) {
  const fullHeadHTML = dataHomepage?.pages?.nodes?.[0]?.seo?.fullHead || "";
  return (
    <>
      <Head>{fullHeadHTML && parse(fullHeadHTML)}</Head>
      <Header data ={dataHeader} />
      <HomePage allPosts={allPosts} dataHomepage={dataHomepage} />
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const allPosts = await getDataForNewAndInsightsSection(language);
  const idHomepageEnglish = 44418;
  const dataFooter = await getTranslatedDataFooter(language);
  const dataHeader= await getDataMenu(language)
  const data = await GetDataHomepage(idHomepageEnglish, language);

  const translation = data?.pages?.nodes?.[0]?.translations?.find(
    (translation) => translation?.language?.code === language
  );

  const languageCode = translation?.language?.code || language;
  const updatedDataHomepage = translation
    ? await GetDataHomepage(translation.pageId, languageCode)
    : data;

  return {
    props: {
      allPosts,
      dataHomepage: updatedDataHomepage,
      dataFooter,
      dataHeader
    },
  };
};
