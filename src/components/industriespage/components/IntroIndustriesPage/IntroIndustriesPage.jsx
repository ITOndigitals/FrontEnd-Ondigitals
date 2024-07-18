import React from "react";
import classes from "./IntroIndustriesPage.module.scss";
import Image from "next/image";

const parse = require("html-react-parser");

export default function IntroIndustriesPage({ data }) {
  const {
    backgroundcolor,
    backgroundcolorimage,
    textColor,
    imageItem,
    textLeft,
    textRight,
    title,
    heading,
  } = data?.pageBy?.pageIndustries?.sectionintro || [];
  const backgroundColor = backgroundcolor || "#3D1766";
  return (
    <section
      style={{ backgroundColor, color: textColor ? textColor : "#fff" }}
      className={classes["content-intro-industries"]}
    >
      <div className="container">
        <div className={classes["content-intro-industries__title"]}>
          <div className={classes["content-intro-industries__title__head"]}>
            {heading && parse(heading)}
          </div>
          <div className={classes["content-intro-industries__title__text"]}>
            {title && parse(title)}
          </div>
        </div>
        <div className={classes["content-intro-industries__content"]}>
          <div className={classes["content-intro-industries__content__left"]}>
            {textLeft && parse(textLeft)}
          </div>
          <div className={classes["content-intro-industries__content__center"]}>
            <div
              style={{
                backgroundColor: backgroundcolorimage
                  ? backgroundcolorimage
                  : "#6F1AB6",
              }}
              className={
                classes["content-intro-industries__content__center__image"]
              }
            >
              <Image
                src={imageItem?.sourceUrl}
                style={{
                  width: "75%",
                  height: "auto",
                }}
                width="0"
                height="0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                alt={imageItem?.altText}
              />
            </div>
          </div>
          <div className={classes["content-intro-industries__content__right"]}>
            {textRight && parse(textRight)}
          </div>
        </div>
      </div>
    </section>
  );
}
