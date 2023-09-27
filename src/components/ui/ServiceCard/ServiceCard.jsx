import React from "react";
import classes from "./ServiceCard.module.scss";
import Link from "next/link";
import ExploreButton from "../Buttons/ExploreButton/ExploreButton";

export default function ServiceCard({ title, color, href, isFinal }) {
  return (
    <Link href={href}>
      <div
        style={{ backgroundColor: color }}
        className={`${classes["service-card"]} ${
          isFinal ? classes["final"] : ""
        }`}
      >
        <div className={classes["service-card__content"]}>
          <div className={classes["service-card__content__title"]}>
            <div>{title}</div>
          </div>
        </div>
        <div></div>
        <div
          className={`${classes["service-card__button"]} ${
            isFinal ? classes.hide : ""
          }`}
        >
          <ExploreButton>How it works</ExploreButton>
        </div>
      </div>
    </Link>
  );
}
