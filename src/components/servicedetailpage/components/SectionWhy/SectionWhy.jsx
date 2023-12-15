import React from "react";
import classes from "./SectionWhy.module.scss";
import CardSectionWhy from "./CardSectionWhy";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function SectionWhy({ data }) {
  if (!data) {
    return null;
  }
  const {
    backgroundColor,
    color,
    listCardWhy,
    mainImage,
    textLeftHead,
    textRightHead,
  } = data;
  return (
    <section
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#CD0404",
        color: color ? color : "#fff",
      }}
      className={classes["section-why"]}
    >
      <div className="container">
        <div className={classes["section-why__head"]}>
          <div className={classes["section-why__head__left"]}>
            {textLeftHead && parse(textLeftHead)}
          </div>
          <div className={classes["section-why__head__right"]}>
            <div
              className={classes["section-why__head__right__text"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              {textRightHead && parse(textRightHead)}
            </div>
          </div>
        </div>
        <div className={classes["section-why__body"]}>
          {listCardWhy &&
            listCardWhy.map((item, index) => (
              <CardSectionWhy key={index} data={item} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
}
