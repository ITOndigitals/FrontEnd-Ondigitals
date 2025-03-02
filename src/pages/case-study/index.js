import CaseStudyPage from "@/components/casestudypage/CaseStudyPage";
import React, { useEffect } from "react";
import { GetDataPageCaseStudy } from "../api/graphqlCaseStudy";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import replaceUrlsHead from "../../../utils/replaceUrlsHead";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  getLanguagePathCaseStudy,
  languagePathsCaseStudy,
} from "../../../utils/languageSlug";
import SchemaODS from "../../../utils/schema";
import HreflangTags from "../../../utils/hreflangTags";

const parse = require("html-react-parser");

export default function PagesMainCaseStudy({
  updatedData,
  dataFooter,
  dataHeader,
}) {
  const router = useRouter();
  const { locale } = router;
  const basePath = getLanguagePathCaseStudy(locale);
  useEffect(() => {
    if (locale in languagePathsCaseStudy) {
      router.push(basePath);
    }
  }, [locale]);
  const dataHead = replaceUrlsHead(updatedData.pageBy?.seo?.fullHead);
  const additionalHeadScripts = updatedData.pageBy.addHeadPage.addContentHead;
  const translations = updatedData?.pageBy?.translations || [];
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
      <SchemaODS />
      <CaseStudyPage data={updatedData} />
      <Footer data={dataFooter} />
    </>
  );
}
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 53542;
  const [dataPage, dataFooter, dataHeader] = await Promise.all([
    GetDataPageCaseStudy(idPage, language),
    getTranslatedDataFooter(language),
    getDataMenu(language),
  ]);
  const translation = dataPage.pageBy?.translations.find(
    (t) => t.language.code === language
  );
  const updatedData = translation
    ? await GetDataPageCaseStudy(translation.pageId, language)
    : dataPage;
  return {
    props: {
      updatedData,
      dataFooter,
      dataHeader,
    },
  };
};
