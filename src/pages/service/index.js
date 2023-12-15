import ServicePage from "@/components/servicepage/ServicePage";
import React from "react";
import { GetPageService } from "../api/graphql";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { getTranslatedDataFooter } from "../api/graphqlHeaderFooter";
const parse = require("html-react-parser");

export default function index({ data, dataFooter }) {
  return (
    <>
      <Header />
      <ServicePage data={data} />
      <Footer data={dataFooter} />
    </>
  );
}
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPageService = 44918;
  const data = await GetPageService(idPageService, language);
  const dataFooter = await getTranslatedDataFooter(language);

  return {
    props: { data, dataFooter },
  };
};
