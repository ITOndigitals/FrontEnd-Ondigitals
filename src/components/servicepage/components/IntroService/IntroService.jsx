import React from "react";
import classes from "./IntroService.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function IntroService({ data }) {
  const { content, pageService } = data;
  const { textScroll1, textScroll2, titleSectionIntro } = pageService;
  return (
    <section className={classes["intro-service"]}>
      <div className="container">
        <div className={classes["intro-service__content"]}>
          <div className={classes["intro-service__content__title"]}>
            <p>{titleSectionIntro && parse(titleSectionIntro)}</p>
          </div>
          <div
            className={classes["intro-service__content__text"]}
          >
            {content && parse(content)}
          </div>
        </div>
        <div className={`${classes["scroll-msg"]}`}>
          <div className={classes["scroll-msg__item"]}>
            <p>{textScroll1 && textScroll1}</p>
            <div className={classes["scroll-msg__line"]}>
              <p></p>
            </div>
            <p>
              {textScroll2 && textScroll2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
