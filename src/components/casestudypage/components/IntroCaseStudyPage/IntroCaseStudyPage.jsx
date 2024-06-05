import React from "react";
import classes from "./IntroCaseStudyPage.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function IntroCaseStudyPage({ data }) {
  const { backgroundColor, content, textScroll, textScrollDecs } = data;
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={classes["intro-case-study"]}
    >
      <div className="container">
        <div className={classes["intro-case-study__content"]}>
          {/* <div className={classes["intro-case-study__content__title"]}>
            <p>
              Unlocking Digital Success: Explore Our Impactful Case Studies and
              Notable Achievements
            </p>
          </div> */}
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["intro-case-study__content__text"]}
          >
            {content && parse(content)}

          </div>
        </div>
        <div className={`${classes["scroll-msg"]}`}>
          <div className={classes["scroll-msg__item"]}>
            <p>{textScroll && textScroll}</p>
            <div className={classes["scroll-msg__line"]}>
              <p></p>
            </div>
            <p style={{ fontFamily: MavenPro.style.fontFamily }}>
             {textScrollDecs && textScrollDecs}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
