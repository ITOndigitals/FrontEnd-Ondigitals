import React from "react";
import classes from "./IntroServiceDetail.module.scss";
import Image from "next/image";

export default function IntroServiceDetail() {
  return (
    <section className={classes["intro-service-detail"]}>
      <div className="container">
        <div className={classes["intro-service-detail__content"]}>
          <div className={classes["intro-service-detail__content__text"]}>
            <h1
              className={
                classes["intro-service-detail__content__text__heading"]
              }
            >
              Search Engine Optimization (SEO)
            </h1>
            <p
              className={classes["intro-service-detail__content__text__title"]}
            >
              Service that drives high quality leads towards your sales team
            </p>
            <div
              className={classes["intro-service-detail__content__text__detail"]}
            >
              If you're looking for serious business growth, then SEO, or search
              engine optimization is the strategy for you. We are on top of
              Google algorithms and we provide tailored SEO services at the most
              affordable rates. As an ROI-focused SEO agency, our technical
              experts and account managers handle a complete SEO project from
              on-page and off-page to technical aspects. And we only use the
              best white hat techniques. We understand the Vietnamese market and
              economy thoroughly and our local insights will be crucial to your
              expansion in Vietnam. We are also open to global opportunities and
              potential partnerships.
            </div>
          </div>
          <div className={classes["intro-service-detail__content__image"]}>
            <div
              className={
                classes["intro-service-detail__content__image__content"]
              }
            >
              <Image
                src="/assets/images/seo.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="ádasda"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
