import React from "react";
import classes from "./OverViewCaseStudyDetail.module.scss";
import Image from "next/image";
export default function OverViewCaseStudyDetail() {
  return (
    <section className={classes["over-view"]}>
      <div className={`${classes["over-view__left"]} container`}>
        <div className={classes["over-view__left__content"]}>
          <p className={classes["over-view__left__content__title"]}>Overview</p>
          <p className={classes["over-view__left__content__text"]}>
            Guardian is a retail chain that offers health and beauty products in
            Vietnam, including Kundal - a Korean brand that specializes in
            natural and eco-friendly hair and body care products. Here in this
            campaign, with stunning visuals and highly interactive content, On
            Digitals helped Guardian Vietnam introduce and promote Kundal brand
            to Vietnamese market.
          </p>
          <div className={classes["over-view__left__content__logo"]}></div>
        </div>
      </div>
      <div className={classes["over-view__right"]}>
        <div className={classes["over-view__right__image"]}>
          <Image
            src="https://s3-alpha-sig.figma.com/img/390a/b4d5/e4fa8a8a92d27408eab008dea2afed27?Expires=1697414400&Signature=oy3SU~91bun95wCgIW9~8mxn-lnXe3ZZlv5f~~3DCVLvtdqWrhrUSSwsOq3yR7Yk8SmzXlkjyA2DzDSDnOFkDMpeae8i8M-HYNaRZVbc-crXwOLkVm2wxU3lSwmKbq5nRgojBLwhw2tLr22kVclGTN6NBIGRvhELgB-sawrpUM68ZWgaiz7cHll3-JDmJjQHQvm6lNODRKFcF8LAqxa5UzBJYLPfVRGJ~MndviLEMe2CKL1po7a5RL3y8BBOYi2-~MrnsfEWTEX8TwLyPJYn3U7PVw1s0JmrLkWHZt1c730A22RJJkdyvvUajtOwIQrycrCHDrsYs3dJ7m6AJ8ZnwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            fill
            alt="case-study-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
