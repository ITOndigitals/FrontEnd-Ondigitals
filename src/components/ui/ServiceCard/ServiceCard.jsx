import React from "react";
import classes from "./ServiceCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className={classes["service-card"]}>
      <div className={classes["service-card__content"]}>
        <div className={classes["service-card__content__title"]}>
          <p>Social Media Marketing</p>
        </div>
        <div className={classes["service-card__content__image"]}>
          <div className={classes["service-card__content__image__main"]}>
            <Image
              fill
              src="https://api.ondigitals.com/wp-content/uploads/2023/09/SEO.png"
              alt="ods"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
