import Header from "@/components/layout/Header/Header";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "./api/graphqlHeaderFooter";
import Footer from "@/components/layout/Footer/Footer";
import CustomPage404 from "@/components/custompage404/CustomPage404";
export default function Page404({ dataFooter, dataHeader }) {
  return (
    <>
      <Header data={dataHeader} />
      <CustomPage404 />
      <Footer data={dataFooter} />
    </>
  );
}
export const getStaticProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const [dataFooter, dataHeader] = await Promise.all([
    getTranslatedDataFooter(language),
    getDataMenu(language),
  ]);
  return {
    props: {
      dataFooter,
      dataHeader,
    },
  };
};
