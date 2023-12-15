import React from "react";
import classes from "./CardSectionWho.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function CardSectionWho({ data }) {
  if (!data) {
    return null;
  }
  const { listImageLogo, mainImage, textContent } = data;
  return (
    <div className={classes["card-section-who"]}>
      <div className={classes["card-section-who__image"]}>
        <Image
          src={mainImage?.sourceUrl}
          fill
          alt={mainImage?.altText}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <div className={classes["card-section-who__content"]}>
        <div className={classes["card-section-who__content__logo"]}>
          {listImageLogo &&
            listImageLogo.map((item, index) => (
              <div
                key={index}
                className={classes["card-section-who__content__logo__item"]}
              >
                <Image
                  src={item?.sourceUrl}
                  fill
                  alt={item?.altText}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            ))}
        </div>
        <div
          className={classes["card-section-who__content__text"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          {textContent && parse(textContent)}
        </div>
      </div>
    </div>
  );
}
