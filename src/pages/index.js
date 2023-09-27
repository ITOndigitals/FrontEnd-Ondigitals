import HomePage from "@/components/homepage/HomePage";
import { GetDataHomepage, getDataForNewAndInsightsSection } from "./api/graphql";

export default function Home({ allPosts, dataHomepage }) {
  console.log(dataHomepage,"sdasdasdas");
  return (
    <>
      <HomePage allPosts={allPosts} />
    </>
  );
}

export const getServerSideProps = async () => {
  const allPosts = await getDataForNewAndInsightsSection();
  const dataHomepage = await GetDataHomepage();
  return { props: { allPosts, dataHomepage } };
};
