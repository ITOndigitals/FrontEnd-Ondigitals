import React from "react";
import classes from "./CardSectionWhy.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function CardSectionWhy({ data, index }) {
  if (!data) {
    return null;
  }
  const { cardContent, cardTitle, mainImage } = data;
  const isOdd = index % 2 !== 0;

  return (
    <div className={classes["card-why"]}>
      <div
        style={{ backgroundColor: isOdd ? "#3D1766" : "#6F1AB6" }}
        className={`${classes["card-why__left"]} hvr-bounce-in`}
      >
        <div className={classes["card-why__left__image"]}>
          <Image
            src={mainImage?.sourceUrl}
            fill
            alt={mainImage?.altText}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      </div>
      <div className={classes["card-why__right"]}>
        <h3 className={classes["card-why__right__title"]}>
          {cardTitle && parse(cardTitle)}
        </h3>
        <div
          className={classes["card-why__right__content"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          {cardContent && parse(cardContent)}
        </div>
      </div>
    </div>
  );
}
