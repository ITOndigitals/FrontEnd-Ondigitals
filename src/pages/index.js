import HomePage from "@/components/homepage/HomePage";
import {
  GetDataHomepage,
  getDataForNewAndInsightsSection,
} from "./api/graphql";
import Head from "next/head";

const parse = require("html-react-parser");

export default function Home({ allPosts, dataHomepage }) {
  return (
    <>
      {/* <Head>{parse(fullHeadHTML)}</Head> */}
      <HomePage allPosts={allPosts} dataHomepage={dataHomepage} />
    </>
  );
}
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const allPosts = await getDataForNewAndInsightsSection(language);
  const idHomepageEnglish = 44418;
  const data = await GetDataHomepage(idHomepageEnglish, language);
  const translation = data.pages.nodes[0]?.translations.find(
    (translation) => translation.language.code === language
  );

  if (translation) {
    const languageCode = translation.language.code
    return {
      props: {
        allPosts,
        dataHomepage: await GetDataHomepage(translation.pageId, languageCode),
      },
    };
  } else {
    return {
      props: { allPosts, dataHomepage: data },
    };
  }
};
