import React, { useEffect } from "react";
import { GetPageIndustries } from "../api/graphql";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";
import Header from "@/components/layout/Header/Header";
import Head from "next/head";
import SchemaODS from "../../../utils/schema";
import Footer from "@/components/layout/Footer/Footer";
import { useRouter } from "next/router";
import replaceUrlsHead from "../../../utils/replaceUrlsHead";
import IndustriesPage from "@/components/industriespage/IndustriesPage";
import {
  getLanguagePathIndustries,
  languagePathsIndustries,
} from "../../../utils/languageSlug";
import HreflangTags from "../../../utils/hreflangTags";

const parse = require("html-react-parser");

export default function Index({ updatedData, dataFooter, dataHeader }) {
  if (!updatedData) {
    return null;
  }
  const router = useRouter();
  const { locale } = router;
  const basePath = getLanguagePathIndustries(locale);
  useEffect(() => {
    if (locale in languagePathsIndustries) {
      router.push(basePath);
    }
  }, [locale]);
  const dataHead = replaceUrlsHead(updatedData.pageBy.seo.fullHead);
  const additionalHeadScripts = updatedData.pageBy.addHeadPage.addContentHead;
  const translations = updatedData.pageBy?.translations || [];

  return (
    <>
      <Header data={dataHeader} />
      <Head>
        {dataHead && parse(dataHead)}
        {additionalHeadScripts && parse(additionalHeadScripts)}
      </Head>
      <HreflangTags
        translations={translations}
        currentUri={router.asPath}
        locale={locale}
      />
      <h1 style={{ display: "none" }}>{updatedData?.pageBy?.seo?.title}</h1>
      <SchemaODS />
      <IndustriesPage data={updatedData} />
      <Footer data={dataFooter} />
    </>
  );
}
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 54444;
  const [dataPage, dataFooter, dataHeader] = await Promise.all([
    GetPageIndustries(idPage, language),
    getTranslatedDataFooter(language),
    getDataMenu(language),
  ]);

  const translation = dataPage.pageBy.translations.find(
    (t) => t.language.code === language
  );
  const updatedData = translation
    ? await GetPageIndustries(translation.pageId, language)
    : dataPage;
  return {
    props: {
      updatedData,
      dataFooter,
      dataHeader,
    },
  };
};
