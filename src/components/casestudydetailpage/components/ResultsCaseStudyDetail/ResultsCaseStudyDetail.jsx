import React from "react";
import classes from "./ResultsCaseStudyDetail.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function ResultsCaseStudyDetail({ data }) {
  const { backgroundColor, title, widthItem, listItem } = data || {};
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={classes["section-results"]}
    >
      <div className="container">
        <div className={classes["section-results-content"]}>
          <h2 className={classes["section-results-content__title"]}>
            {title && title}
          </h2>
          <div className={classes["section-results-content__detail"]}>
            {listItem &&
              listItem.map((item, index) => (
                <div
                  style={{ width: widthItem }}
                  key={index}
                  className={classes["section-results-content__detail__text"]}
                >
                  <p
                    className={
                      classes["section-results-content__detail__text__number"]
                    }
                  >
                    {item?.titleItem}
                  </p>
                  <p
                    className={
                      classes["section-results-content__detail__text__title"]
                    }
                  >
                    {item?.textItem}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
