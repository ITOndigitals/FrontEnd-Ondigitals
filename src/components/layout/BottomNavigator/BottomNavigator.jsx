import React from "react";
import classes from "./BottomNavigator.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { languagePathsContact, localeLangButtonContact } from "../../../../utils/languageSlug";

const BottomNavigator = ({ isVisible, isDark }) => {
  const { locale } = useRouter();
  return (
    <div
      className={`bottom-nav ${classes["bottom-nav"]} ${
        !isVisible ? classes["bottom-nav--hidden"] : ""
      }`}
    >
      <div className="container--big">
        <Link
          href={languagePathsContact[locale]}
          className={`${classes["bottom-nav-item"]} ${
            isDark ? classes.dark : ""
          }`}
        >
         {localeLangButtonContact[locale]}
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigator;
