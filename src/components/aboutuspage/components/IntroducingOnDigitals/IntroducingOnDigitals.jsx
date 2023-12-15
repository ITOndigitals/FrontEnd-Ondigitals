import Image from "next/image";
import React from "react";
import classes from "./IntroducingOnDigitals.module.scss";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function IntroducingOnDigitals({ data }) {
  const { textContent, imageRight, titleSection } = data[0];
  return (
    <section className={classes["introducing-ondigitals"]}>
      <div className="container">
        <div className={classes["main-content"]}>
          <div className={classes["main-content__text"]}>
            <h2 className={classes["main-content__text__title"]}>
              {titleSection && titleSection}
            </h2>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["main-content__text__detail"]}
            >
              {textContent && parse(textContent)}
            </div>
          </div>
          <div className={classes["main-content__image"]}>
            <Image
              src={imageRight?.sourceUrl}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              alt={imageRight?.altText}
            
            />
          </div>
        </div>
      </div>
    </section>
  );
}
