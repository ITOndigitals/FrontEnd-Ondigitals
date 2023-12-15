import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ServiceDetail from "@/components/servicedetailpage/ServiceDetail";
import {
  GetListSlugServiceParent,
  GetServiceParentDetailBySlug,
} from "../api/graphql";
import { getTranslatedDataFooter } from "../api/graphqlHeaderFooter";
const parse = require("html-react-parser");

export default function ServiceParent({ serviceData, dataFooter }) {
  const dataHead = serviceData.serviceParentBy.seo.fullHead;
  console.log(serviceData)
  return (
    <>
      <Header />
      <Head>{dataHead && parse(dataHead)}</Head>
      <ServiceDetail dataServiceDetail={serviceData} />
      <Footer data={dataFooter} />
    </>
  );
}
export async function getStaticPaths() {
  const listServices = await GetListSlugServiceParent();
  const paths = listServices.map((service) => ({
    params: { slug: service.slug },
    locale: service.language.code.toLowerCase(),
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ params, locale }) {
  const language = locale.toUpperCase();
  const serviceData = await GetServiceParentDetailBySlug(params.slug);
  const dataFooter = await getTranslatedDataFooter(language);
  if (serviceData && serviceData.serviceParentBy) {
    return {
      props: {
        serviceData,
        dataFooter,
      },
      revalidate: 8640,
    };
  } else {
    return {
      redirect: {
        destination: `/${locale}`,
        permanent: false,
      },
    };
  }
}
