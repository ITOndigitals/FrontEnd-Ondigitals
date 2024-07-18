import React from "react";
import classes from "./HeroIndustriesPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getLanguagePathContact,
  localeLangButtonServiceChild,
} from "../../../../../utils/languageSlug";
const parse = require("html-react-parser");

export default function HeroIndustriesPage({ data }) {
  const { content, featuredImage, pageIndustries } = data.pageBy || [];
  const { backgroundColor, textColor, textScroll1, textScroll2, title } =
    pageIndustries.sectionhero || {};
  const backgroundColorMain = backgroundColor || "#3D1766";
  const textColorMain = textColor || "#111";
  const { locale } = useRouter();
  return (
    <section
      style={{ backgroundColor: backgroundColorMain, color: textColorMain }}
      className={classes["hero-industries"]}
    >
      <div className="container">
        <div className={classes["hero-industries__content"]}>
          <div className={classes["hero-industries__content__text"]}>
            <h1 className={classes["hero-industries__content__text__heading"]}>
              {title && title}
            </h1>
            {/* <p className={classes["hero-industries__content__text__title"]}>
             
            </p> */}
            <div className={classes["hero-industries__content__text__detail"]}>
              {content && parse(content)}
            </div>

            <Link
              className={classes["hero-industries__content__text__btn"]}
              href={getLanguagePathContact(locale)}
            >
              {localeLangButtonServiceChild[locale]}
            </Link>
          </div>
          <div className={classes["hero-industries__content__image"]}>
            <div
              className={classes["hero-industries__content__image__content"]}
            >
              <Image
                src={featuredImage?.node.sourceUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={featuredImage?.node.altText}
              />
            </div>
          </div>
        </div>
        <div className={`${classes["scroll-msg"]}`}>
          <div className={classes["scroll-msg__item"]}>
            <p>{textScroll1 && textScroll1}</p>
            <div className={classes["scroll-msg__line"]}>
              <p></p>
            </div>
            <p>{textScroll2 && textScroll2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
