import React from "react";
import classes from "./CaseStudyCard.module.scss";
import Image from "next/image";
import Tag from "../Tag/Tag";
export default function CaseStudyCard() {
  return (
    <div className={classes["case-study-card"]}>
      <div className={classes["case-study-card__image"]}>
        <Image
          fill
          src="/assets/images/ServicePage/kundal.jpg"
          alt="brand_name"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={classes["case-study-card__overlay"]}>
        <div className={classes["case-study-card__overlay__content"]}>
          <div className={classes["case-study-card__overlay__content__tag"]}>
            <Tag type={1} name={"Content Marketing"} href="" />
            <Tag type={4} name={"Facebook Abs"} href="" />
            <Tag type={3} name={"Graphic design"} href="" />
            <Tag type={1} name={"KOL Marketing"} href="" />
            <Tag type={2} name={"Video Marketing"} href="" />
          </div>
          <div
            className={classes["case-study-card__overlay__content__btn"]}
          >ádadasdasdas</div>
        </div>
      </div>
    </div>
  );
}
