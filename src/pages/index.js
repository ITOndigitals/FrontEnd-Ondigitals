import HomePage from "@/components/homepage/HomePage";
import {
  GetDataHomepage,
  getDataForNewAndInsightsSection,
} from "./api/graphql";
import Head from "next/head";

export default function Home({ allPosts, dataHomepage }) {
  const { pages } = dataHomepage;
  const fullHeadHTML = pages?.nodes[0]?.seo.fullHead;
  const parse = require("html-react-parser");
  return (
    <>
      <Head>{parse(fullHeadHTML)}</Head>
      <HomePage allPosts={allPosts} dataHomepage={dataHomepage} />
    </>
  );
}
export const getServerSideProps = async () => {
  const allPosts = await getDataForNewAndInsightsSection();
  const dataHomepage = await GetDataHomepage();
  return { props: { allPosts, dataHomepage} };
};
