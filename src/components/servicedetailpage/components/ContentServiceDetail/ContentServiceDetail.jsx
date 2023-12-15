import React from "react";
import classes from "./ContentServiceDetail.module.scss";
import Image from "next/image";

const parse = require("html-react-parser");

export default function ContentServiceDetail({ data }) {
  const {
    textLeft,
    textRight,
    textTitle,
    textHeadTitle,
    imageSectionIntro,
    color,
    backgroundColorImage,
  } = data || [];
  const backgroundColor = data?.backgroundColor || "#3D1766";
  return (
    <section
      style={{ backgroundColor, color: color ? color : "#fff" }}
      className={classes["content-service-detail"]}
    >
      <div className="container">
        <div className={classes["content-service-detail__title"]}>
          <div className={classes["content-service-detail__title__head"]}>
            {textHeadTitle && parse(textHeadTitle)}
          </div>
          <div className={classes["content-service-detail__title__text"]}>
            {textTitle && parse(textTitle)}
          </div>
        </div>
        <div className={classes["content-service-detail__content"]}>
          <div className={classes["content-service-detail__content__left"]}>
            {textLeft && parse(textLeft)}
          </div>
          <div className={classes["content-service-detail__content__center"]}>
            <div
              style={{
                backgroundColor: backgroundColorImage
                  ? backgroundColorImage
                  : "#6F1AB6",
              }}
              className={
                classes["content-service-detail__content__center__image"]
              }
            >
              <Image
                src={imageSectionIntro?.sourceUrl}
                style={{
                  width: "75%",
                  height: "auto",
                }}
                width="0"
                height="0"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                alt={imageSectionIntro?.altText}
              />
            </div>
          </div>
          <div className={classes["content-service-detail__content__right"]}>
            {textRight && parse(textRight)}
          </div>
        </div>
      </div>
    </section>
  );
}
