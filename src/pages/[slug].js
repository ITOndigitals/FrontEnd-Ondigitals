import React, { useEffect } from "react";
import {
  GetListSlugService,
  GetServiceDetailBySlug,
  GetListSlugPosts,
  GetPostDetailBySlug,
  getDataForNewAndInsightsSection,
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
const parse = require("html-react-parser");

export default function DynamicDetailPage({
  serviceData,
  blogData,
  relatedPosts,
  dataFooter,
  notFound,
  dataHeader,
}) {
  const { locale } = useRouter();
  useEffect(() => {
    if (notFound) {
      window.location.href = `/${locale}`;
    }
  }, [notFound]);
  if (serviceData) {
    const dataHead = serviceData.serviceBy.seo.fullHead;
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
    const dataHead = blogData.postBy.seo.fullHead;
    return (
      <>
        <Head>{dataHead && parse(dataHead)}</Head>
        <Header data={dataHeader} />
        <BlogDetail postDetail={blogData} relatedPosts={relatedPosts} />
        <Footer data={dataFooter} />
      </>
    );
  }
}

export async function getStaticPaths() {
  const listServices = await GetListSlugService();
  const supportedLanguages = ["EN", "VI", "ZH"];
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

  // const postPaths = listPosts.map((post) => ({
  //   params: { slug: post.slug },
  //   locale: post.language.code.toLowerCase(),
  // }));

  const paths = servicePaths.concat(allPostsPaths);

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  const language = locale.toUpperCase();
  const serviceData = await GetServiceDetailBySlug(params.slug);
  const blogData = await GetPostDetailBySlug(params.slug, language);
  const dataFooter = await getTranslatedDataFooter(language);
  const dataHeader = await getDataMenu(language);
  const notFound = true;
  if (serviceData && serviceData.serviceBy) {
    return {
      props: {
        serviceData,
        dataFooter,
        dataHeader,
      },
      revalidate: 8640,
    };
  } else if (blogData && blogData.postBy) {
    const relatedPosts = await getDataForNewAndInsightsSection(language);
    return {
      props: {
        blogData,
        relatedPosts,
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
