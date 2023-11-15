import React from "react";
import classes from "./IntroCaseStudyPage.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function IntroCaseStudyPage() {
  return (
    <section className={classes["intro-case-study"]}>
      <div className="container">
        <div className={classes["intro-case-study__content"]}>
          <div className={classes["intro-case-study__content__title"]}>
            <p>
              Unlocking Digital Success: Explore Our Impactful Case Studies and
              Notable Achievements
            </p>
          </div>
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["intro-case-study__content__text"]}
          >
            Welcome to On Digitals, where innovation meets results.
Dive into our world of digital mastery as we proudly present our most remarkable case studies and achievements. Discover how we've partnered with clients to drive growth, increase brand visibility, and create unforgettable digital experiences. Join us on this inspiring journey through our portfolio of success stories, and let us show you how we can make your dreams a reality.
It's time to turn your vision into a success story of its own – with On Digitals, the future is digital, and the future is now.
          </div>
        </div>
        <div className={`${classes["scroll-msg"]}`}>
          <div className={classes["scroll-msg__item"]}>
            <p>áddsa</p>
            <div className={classes["scroll-msg__line"]}>
              <p></p>
            </div>
            <p style={{ fontFamily: MavenPro.style.fontFamily }}>ÁáA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
