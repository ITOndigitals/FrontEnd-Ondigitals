import React from "react";
import classes from "./IntroService.module.scss";
import { Maven_Pro } from "next/font/google";
import Image from "next/image";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function IntroService({ data }) {
  const { content, pageService } = data;
  const { textScroll1, textScroll2, titleSectionIntro } = pageService;
  return (
    <section className={classes["intro-service"]}>
      <div className="container">
        <div className={classes["intro-conent"]}>
          <div className={classes["intro-service__content"]}>
            <div className={classes["intro-service__content__title"]}>
              <p>{titleSectionIntro && parse(titleSectionIntro)}</p>
            </div>
            <div className={classes["intro-service__content__text"]}>
              {content && parse(content)}
            </div>
          </div>
          <div className={classes["intro-service__image"]}>
            <Image
              src="https://api.ondigitals.com/wp-content/uploads/2024/06/banner-page-services.png"
              fill
              alt="{post.title}"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
        <div className={`${classes["scroll-msg"]}`}>
          <div className={classes["scroll-msg__item"]}>
            <p>{textScroll1 && textScroll1}</p>
            <div className={classes["scroll-msg__line"]}>
              <p></p>
            </div>
            <p>{textScroll2 && textScroll2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
