import Link from "next/link";
import { DownNavIcon, UpNavIcon } from "../../Icons/ListIcon";
import classes from "./SectionNavButtons.module.scss";
import { useRouter } from "next/router";
import { localeLangButtonContact } from "../../../../../utils/languageSlug";

const SectionNavButtons = ({ onClick, isDown, isUp, color, noLeftButton }) => {
  const { locale } = useRouter();
  return (
    <div className={classes.container}>
      <div className={`container--big ${classes["wrapper"]}`}>
        <Link
          href={`/${locale}/contact`}
          className={`${classes["bottom-nav-item"]} ${
            noLeftButton ? classes.hide : ""
          }`}
          style={{ color: color }}
        >
          {localeLangButtonContact[locale]}
        </Link>
        <div className={classes["btn"]} onClick={onClick}>
          {isDown && <DownNavIcon width={30} height={30} color={color} />}
          {isUp && <UpNavIcon width={30} height={30} color={color} />}
        </div>
      </div>
    </div>
  );
};

export default SectionNavButtons;
