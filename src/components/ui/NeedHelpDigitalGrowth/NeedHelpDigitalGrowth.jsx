import React from "react";
import classes from "./NeedHelpDigitalGrowth.module.scss";
import Button from "../Buttons/Button/Button";
import { ArrowRight } from "../Icons/ListIcon";
import { useRouter } from "next/router";
import { Maven_Pro } from "next/font/google";
import { languagePathsContact } from "../../../../utils/languageSlug";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function NeedHelpDigitalGrowth({ data }) {
  const { title, textButton, content, buttonColor, backgroundColor } =
    data || {};
  const { locale } = useRouter();
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={classes["help-digital-growth-main"]}
    >
      <div className="container">
        <div className={classes["help-digital-growth-main__content"]}>
          <div className={classes["help-digital-growth-main__content__title"]}>
            {title && parse(title)}
          </div>
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["help-digital-growth-main__content__text"]}
          >
            {content && parse(content)}
          </div>
          <div className={classes["help-digital-growth-main__content__button"]}>
            <Button
              href={languagePathsContact[locale]}
              className="btn-contact-form"
              RightIcon={<ArrowRight width={24} height={24} color="#FFF" />}
            >
              {textButton && textButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
