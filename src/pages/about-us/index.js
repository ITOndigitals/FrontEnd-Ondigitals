import AboutUs from "@/components/aboutuspage/AboutUs";
import { GetPageAboutUs } from "../api/graphql";

const index = ({ dataPageAboutUs }) => {
  return (
    <>
      <AboutUs data={dataPageAboutUs} />
    </>
  );
};
export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPageAboutUs = 44514;
  const data = await GetPageAboutUs(idPageAboutUs);
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
      props: { dataPageAboutUs: data },
    };
  }
};
export default index;
