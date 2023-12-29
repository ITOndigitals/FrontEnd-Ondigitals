import React, { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ServiceDetail from "@/components/servicedetailpage/ServiceDetail";
import {
  GetListSlugServiceParent,
  GetServiceParentDetailBySlug,
} from "../api/graphql";
import { getDataMenu, getTranslatedDataFooter } from "../api/graphqlHeaderFooter";
import { useRouter } from "next/router";
const parse = require("html-react-parser");

export default function ServiceParent({ serviceData, dataFooter, notFound,dataHeader }) {
  const { locale } = useRouter();
  useEffect(() => {
    if (notFound) {
      window.location.href = `/${locale}`;
    }
  }, [notFound]);
  if (serviceData) {
    const dataHead = serviceData.serviceParentBy.seo.fullHead;
    return (
      <>
        <Header data={dataHeader} />
        <Head>{dataHead && parse(dataHead)}</Head>
        <ServiceDetail dataServiceDetail={serviceData} />
        <Footer data={dataFooter} />
      </>
    );
  }
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
export async function getStaticProps(context) {
  const { params, locale } = context;
  const language = locale.toUpperCase();
  const notFound = true;
  const serviceData = await GetServiceParentDetailBySlug(params.slug);
  const dataFooter = await getTranslatedDataFooter(language);
  const dataHeader = await getDataMenu(language);
  if (serviceData && serviceData.serviceParentBy) {
    return {
      props: {
        serviceData,
        dataFooter,
        dataHeader,
      },
      revalidate: 8640,
    };
  } else {
    return {
      props: {
        notFound,
      },
    };
  }
}
