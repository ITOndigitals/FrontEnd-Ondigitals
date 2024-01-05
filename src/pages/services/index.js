import ServicePage from "@/components/servicepage/ServicePage";
import React, { useEffect } from "react";
import { GetPageService } from "../api/graphql";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";
import Head from "next/head";
import { useRouter } from "next/router";


const parse = require("html-react-parser");

export default function Index({ updatedData, dataFooter, dataHeader }) {
  if (!updatedData) {
    return null;
  }

  const dataHead = updatedData.pageBy.seo.fullHead;
  return (
    <>
      <Header data={dataHeader} />
      <Head>{dataHead && parse(dataHead)}</Head>
      <ServicePage data={updatedData} />
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 44918;
  const [dataPage, dataFooter, dataHeader] = await Promise.all([
    GetPageService(idPage, language),
    getTranslatedDataFooter(language),
    getDataMenu(language),
  ]);

  const translation = dataPage.pageBy.translations.find(
    (t) => t.language.code === language
  );
  const updatedData = translation
    ? await GetPageService(translation.pageId, language)
    : dataPage;
  return {
    props: {
      updatedData,
      dataFooter,
      dataHeader,
    },
  };
};
