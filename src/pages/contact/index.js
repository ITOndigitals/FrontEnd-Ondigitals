import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import { GetDataPageContact } from "../api/graphql";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";
import Head from "next/head";
import {
  getLanguagePathContact,
  languagePathsContact,
} from "../../../utils/languageSlug";
import { useRouter } from "next/router";
import { useEffect } from "react";
import replaceUrlsHead from "../../../utils/replaceUrlsHead";
import SchemaODS from "../../../utils/schema";
import HreflangTags from "../../../utils/hreflangTags";

const parse = require("html-react-parser");

export default function ContactUs({ updatedData, dataFooter, dataHeader }) {
  if (!updatedData) {
    return <div>Loading...</div>;
  }
  const router = useRouter();
  const { locale } = router;
  const basePath = getLanguagePathContact(locale);
  useEffect(() => {
    if (locale in languagePathsContact) {
      router.push(basePath);
    }
  }, [locale]);
  const { pageContact, seo, addHeadPage } = updatedData;
  const dataHead = replaceUrlsHead(seo?.fullHead);
  const additionalHeadScripts = addHeadPage.addContentHead;
  const translations = updatedData?.translations || [];
  return (
    <>
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
      <Header data={dataHeader} />
      <Contact data={pageContact} />
      <Footer data={dataFooter} />
    </>
  );
}
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 45407;
  const [dataPage, dataFooter, dataHeader] = await Promise.all([
    GetDataPageContact(idPage),
    getTranslatedDataFooter(language),
    getDataMenu(language),
  ]);

  const translation = dataPage.translations.find(
    (t) => t.language.code === language
  );
  const updatedData = translation
    ? await GetDataPageContact(translation.pageId)
    : dataPage;
  return {
    props: {
      updatedData,
      dataFooter,
      dataHeader,
    },
  };
};
