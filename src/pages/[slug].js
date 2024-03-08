import React, { useEffect } from "react";
import {
  GetListSlugService,
  GetServiceDetailBySlug,
  GetListSlugPosts,
  GetPostDetailBySlug,
  getDataForNewAndInsightsSection,
  GetListSlugServiceParent,
  GetServiceParentDetailBySlug,
} from "./api/graphql";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ServiceDetail from "@/components/servicedetailpage/ServiceDetail";
import BlogDetail from "@/components/blogdetailpage/BlogDetail";
import { useRouter } from "next/router";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "./api/graphqlHeaderFooter";
import replaceUrlsHead from "../../utils/replaceUrlsHead";
const parse = require("html-react-parser");

export default function DynamicDetailPage({
  serviceData,
  serviceParentsData,
  blogData,
  relatedPosts,
  dataFooter,
  dataHeader,
}) {
  if (serviceData) {
    const dataHead = replaceUrlsHead(serviceData.serviceBy.seo.fullHead);
    return (
      <>
        <Header data={dataHeader} />
        <Head>{dataHead && parse(dataHead)}</Head>
        <ServiceDetail dataServiceDetail={serviceData} />
        <Footer data={dataFooter} />
      </>
    );
  }
  if (blogData) {
    const dataHead = replaceUrlsHead(blogData.postBy.seo.fullHead);
    return (
      <>
        <Head>{dataHead && parse(dataHead)}</Head>
        <Header data={dataHeader} />
        <BlogDetail postDetail={blogData} relatedPosts={relatedPosts} />
        <Footer data={dataFooter} />
      </>
    );
  }
  if (serviceParentsData) {
    const dataHead = replaceUrlsHead(
      serviceParentsData.serviceParentBy.seo.fullHead
    );
    return (
      <>
        <Header data={dataHeader} />
        <Head>{dataHead && parse(dataHead)}</Head>
        <ServiceDetail dataServiceDetail={serviceParentsData} />
        <Footer data={dataFooter} />
      </>
    );
  }
}

export async function getStaticPaths() {
  const listServices = await GetListSlugService();
  const supportedLanguages = ["EN", "VI"];
  const allPostsPaths = [];
  for (const lang of supportedLanguages) {
    const posts = await GetListSlugPosts(lang);
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
      locale: post.language.code.toLowerCase(),
    }));
    allPostsPaths.push(...paths);
  }
  const servicePaths = listServices.map((service) => ({
    params: { slug: service.slug },
    locale: service.language.code.toLowerCase(),
  }));
  const listServicesParent = await GetListSlugServiceParent();
  const pathsServiceParent = listServicesParent.map((service) => ({
    params: { slug: service.slug },
    locale: service.language.code.toLowerCase(),
  }));
  const paths = servicePaths.concat(allPostsPaths).concat(pathsServiceParent);
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const language = locale.toUpperCase();
  const serviceData = await GetServiceDetailBySlug(params.slug);
  const blogData = await GetPostDetailBySlug(params.slug, language);
  const serviceParentsData = await GetServiceParentDetailBySlug(params.slug);
  const dataFooter = await getTranslatedDataFooter(language);
  const dataHeader = await getDataMenu(language);
  // const notFound = true;
  if (serviceData && serviceData.serviceBy) {
    return {
      props: {
        serviceData,
        dataFooter,
        dataHeader,
      },
      revalidate: 3600,
    };
  } else if (
    blogData &&
    blogData.postBy &&
    (language === "VI" || language === "EN")
  ) {
    const relatedPosts = await getDataForNewAndInsightsSection(language);
    return {
      props: {
        blogData,
        relatedPosts,
        dataFooter,
        dataHeader,
      },
      revalidate: 3600,
    };
  }
  if (serviceParentsData && serviceParentsData.serviceParentBy) {
    return {
      props: {
        serviceParentsData,
        dataFooter,
        dataHeader,
      },
      revalidate: 3600,
    };
  } else {
    return {
      notFound: true,
    };
  }
}
