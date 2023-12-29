import AboutUs from "@/components/aboutuspage/AboutUs";
import { GetPageAboutUs } from "../api/graphql";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { getDataMenu, getTranslatedDataFooter } from "../api/graphqlHeaderFooter";
import Head from "next/head";

const parse = require("html-react-parser");

const index = ({ updatedData, dataFooter, dataHeader }) => {
  if (!updatedData) {
    return null;
  } else {
    const dataHead = updatedData.pageBy.seo.fullHead;
    return (
      <>
        <Header data={dataHeader} />
        <Head>{dataHead && parse(dataHead)}</Head>
        <AboutUs data={updatedData} />
        <Footer data={dataFooter} />
      </>
    );
  }
};
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPageAboutUs = 44514;
  const data = await GetPageAboutUs(idPageAboutUs);
  const dataFooter = await getTranslatedDataFooter(language);
  const dataHeader = await getDataMenu(language);
  const translation = data.pageBy.translations.find(
    (translation) => translation.language.code === language
  );
  const updatedData = translation
    ? await GetPageAboutUs(translation.pageId)
    : data;
  return {
    props: {
      updatedData,
      dataFooter,
      dataHeader,
    },
  };
};
export default index;
