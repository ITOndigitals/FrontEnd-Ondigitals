import React from "react";
import classes from "./ServiceCard.module.scss";
import Link from "next/link";

export default function ServiceCard({ title, color, href }) {
  return (
    <Link href={href}>
      <div
        style={{ backgroundColor: color }}
        className={classes["service-card"]}
      >
        <div className={classes["service-card__content"]}>
          <div className={classes["service-card__content__title"]}>
            <p>{title}</p>
          </div>
          <div className={classes["service-card__content__button"]}>
            <p>How it works</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
