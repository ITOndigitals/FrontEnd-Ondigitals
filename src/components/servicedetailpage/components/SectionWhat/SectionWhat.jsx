import React from "react";
import classes from "./SectionWhat.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function SectionWhat({ data }) {
  if (!data) {
    return null;
  }
  const { contentLeft, contentRight, mainImage, textTitle, backgroundColor } =
    data;
  return (
    <section
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#6f1ab6" }}
      className={classes["section-what"]}
    >
      <div className="container">
        <div className={classes["section-what__title"]}>
          {textTitle && parse(textTitle)}
        </div>
        <div className={classes["section-what__content"]}>
          <div
            className={classes["section-what__content__left"]}
            style={{ fontFamily: MavenPro.style.fontFamily }}
          >
            {contentLeft && parse(contentLeft)}
          </div>
          <div className={classes["section-what__content__center"]}>
            <div className={classes["section-what__content__center__image"]}>
              <Image
                src={mainImage?.sourceUrl}
                fill
                alt={mainImage?.altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </div>
          <div
            className={classes["section-what__content__right"]}
            style={{ fontFamily: MavenPro.style.fontFamily }}
          >
            {contentRight && parse(contentRight)}
          </div>
        </div>
      </div>
    </section>
  );
}
