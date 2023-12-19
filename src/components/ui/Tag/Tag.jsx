import Link from "next/link";
import classes from "./Tag.module.scss";
import { useRouter } from "next/router";
import { getLanguagePathService } from "../../../../utils/languageSlug";
const Tag = ({ backgroundColor, name, href }) => {
  const { locale } = useRouter();
  const basePath = getLanguagePathService(locale);
  return (
    <Link
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#3D1766",
      }}
      href={`${basePath}/${href}`}
      className={`${classes.tag}`}
    >
      {name}
    </Link>
  );
};

export default Tag;
