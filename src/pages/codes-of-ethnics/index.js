import ServicePage from "@/components/servicepage/ServicePage";
import React, { useEffect } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Head from "next/head";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";
import { getDataPolicyAndCoEPage } from "../api/graphql";
import ServiceDetail from "@/components/servicedetailpage/ServiceDetail";
import { useRouter } from "next/router";
import {
  getLanguagePathCodesofEthnics,
  languagePathsCodesofEthnics,
} from "../../../utils/languageSlug";
import replaceUrlsHead from "../../../utils/replaceUrlsHead";
import SchemaODS from "../../../utils/schema";
import HreflangTags from "../../../utils/hreflangTags";

const parse = require("html-react-parser");

export default function DataPolicy({ updatedData, dataFooter, dataHeader }) {
  if (!updatedData) {
    return null;
  }
  const router = useRouter();
  const { locale } = router;
  const basePath = getLanguagePathCodesofEthnics(locale);
  useEffect(() => {
    if (locale in languagePathsCodesofEthnics) {
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
      <ServiceDetail dataServiceDetail={updatedData} isUsePageId={true} />
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 45843;
  const [dataPage, dataFooter, dataHeader] = await Promise.all([
    getDataPolicyAndCoEPage(idPage),
    getTranslatedDataFooter(language),
    getDataMenu(language),
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
      dataHeader,
    },
  };
};
