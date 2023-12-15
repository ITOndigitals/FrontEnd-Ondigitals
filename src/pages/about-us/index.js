import AboutUs from "@/components/aboutuspage/AboutUs";
import { GetPageAboutUs } from "../api/graphql";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { getTranslatedDataFooter } from "../api/graphqlHeaderFooter";

const index = ({ dataPageAboutUs, dataFooter }) => {
  return (
    <>
      <Header />
      <AboutUs data={dataPageAboutUs} />
      <Footer data={dataFooter} />
    </>
  );
};
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPageAboutUs = 44514;
  const data = await GetPageAboutUs(idPageAboutUs);
  const dataFooter = await getTranslatedDataFooter(language);
  const translation = data.pageBy.translations.find(
    (translation) => translation.language.code === language
  );

  if (translation) {
    return {
      props: {
        dataPageAboutUs: await GetPageAboutUs(translation.pageId),
      },
    };
  } else {
    return {
      props: { dataPageAboutUs: data, dataFooter },
    };
  }
};
export default index;
