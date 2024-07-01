import React, { useEffect, useState } from "react";
import HomePage from "@/components/homepage/HomePage";
import {
  GetDataHomepage,
  getDataForNewAndInsightsSection,
} from "./api/graphql";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "./api/graphqlHeaderFooter";
import { useRouter } from "next/router";
import replaceUrlsHead from "../../utils/replaceUrlsHead";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import SchemaODS from "../../utils/schema";

const parse = require("html-react-parser");

export default function Home({
  allPosts,
  dataHomepage,
  dataFooter,
  dataHeader,
}) {
  const router = useRouter();
  const { locale } = router;
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Kiểm tra nếu người dùng quay lại trang chủ từ bất kỳ trang nào khác
      if (url === `/${locale}/` || url === "/") {
        // Reload trang chủ khi người dùng quay lại từ các trang khác
        window.location.reload();
      }
    };
    // Lắng nghe sự kiện chuyển trang
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  const fullHeadHTML =
    replaceUrlsHead(dataHomepage?.pages?.nodes?.[0]?.seo?.fullHead)?.replace(
      /trang-chu\/|homepagechina\/|trang-chu-nhat\/|trang-chu-han\//g,
      ""
    ) || "";
  return (
    <>
      <Head>
        {fullHeadHTML && parse(fullHeadHTML)}
      </Head>
      <SchemaODS/>
      <Header data={dataHeader} />
      <HomePage allPosts={allPosts} dataHomepage={dataHomepage} />
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idHomepageEnglish = 44418;

  // Parallelize async calls
  const [allPosts, dataFooter, dataHeader, data] = await Promise.all([
    getDataForNewAndInsightsSection(language),
    getTranslatedDataFooter(language),
    getDataMenu(language),
    GetDataHomepage(idHomepageEnglish, language),
  ]);

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
      dataHeader,
    },
  };
};
