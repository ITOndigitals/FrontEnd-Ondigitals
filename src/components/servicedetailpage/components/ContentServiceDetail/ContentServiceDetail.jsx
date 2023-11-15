import React from "react";
import classes from "./ContentServiceDetail.module.scss";
import Image from "next/image";

const parse = require("html-react-parser");

export default function ContentServiceDetail({ data }) {
  const { textLeft, textRight, textTitle, imageSectionIntro } =
    data || [];
  const backgroundColor = data?.backgroundColor || "#3D1766";
  return (
    <section
      style={{ backgroundColor }}
      className={classes["content-service-detail"]}
    >
      <div className="container">
        <div className={classes["content-service-detail__title"]}>
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
              className={
                classes["content-service-detail__content__center__image"]
              }
            >
              <Image
                src={imageSectionIntro?.sourceUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                alt={imageSectionIntro?.altText}
              />
            </div>
          </div>
          <div className={classes["content-service-detail__content__right"]}>
            { textRight && parse(textRight)}
          </div>
        </div>
      </div>
    </section>
  );
}
