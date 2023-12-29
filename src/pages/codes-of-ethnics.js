import ServicePage from "@/components/servicepage/ServicePage";
import React from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Head from "next/head";
import { getTranslatedDataFooter } from "./api/graphqlHeaderFooter";
import { getDataPolicyAndCoEPage } from "./api/graphql";
import ServiceDetail from "@/components/servicedetailpage/ServiceDetail";

const parse = require("html-react-parser");

export default function DataPolicy({ updatedData, dataFooter }) {
  if (!updatedData) {
    return null;
  }
  const dataHead = updatedData.pageBy?.seo?.fullHead;
  return (
    <>
      <Header />
      <Head>{dataHead && parse(dataHead)}</Head>
      <ServiceDetail dataServiceDetail={updatedData} isUsePageId={true} />
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({locale}) => {
  const language = locale.toUpperCase();
  const idPage = 45843;
  const [dataPage, dataFooter] = await Promise.all([
    getDataPolicyAndCoEPage(idPage),
    getTranslatedDataFooter(language),
  ]);
  const translation = dataPage.pageBy.translations.find(
    (t) => t.language.code === language
  );
  const updatedData = translation
    ? await getDataPolicyAndCoEPage(translation.pageId)
    : dataPage;
  return {
    props: {
      updatedData,
      dataFooter,
    },
  };
};
