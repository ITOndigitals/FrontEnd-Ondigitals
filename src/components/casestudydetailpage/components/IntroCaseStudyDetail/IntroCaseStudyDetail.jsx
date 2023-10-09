import React from "react";
import classes from "./IntroCaseStudyDetail.module.scss";
export default function IntroCaseStudyDetail() {
  return (
    <section className={classes["intro-case-study-detail"]}>
      <div
        className={classes["intro-case-study-detail__background-section"]}
      ></div>
      <div className={classes["intro-case-study-detail__content"]}>
        <div className={classes["intro-case-study-detail__content__heading"]}>
          <p
            className={
              classes["intro-case-study-detail__content__heading__title"]
            }
          >
            KUNDAL
          </p>
          <p
            className={
              classes["intro-case-study-detail__content__heading__text"]
            }
          >
            Digital Marketing Campaign
          </p>
        </div>
        <hr />
        <div className={classes["intro-case-study-detail__content__service"]}>
          <p
            className={
              classes["intro-case-study-detail__content__service__title"]
            }
          >
            SERVICES
          </p>
          <ul>
            <li>Content Marketing</li>
            <li>Facebook Ads</li>
            <li>Creative Design</li>
            <li>KOL Marketing</li>
            <li>Video Marketing</li>
          </ul>
        </div>
        <hr />

        <div className={classes["intro-case-study-detail__content__footer"]}>
          <p>Case Study - 2020</p>
        </div>
      </div>
    </section>
  );
}
