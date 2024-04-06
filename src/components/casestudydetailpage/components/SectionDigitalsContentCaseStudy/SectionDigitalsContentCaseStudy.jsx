import React from "react";
import classes from "./SectionDigitalsContentCaseStudy.module.scss";
import Image from "next/image";
const parse = require("html-react-parser");

export default function SectionDigitalsContentCaseStudy({ data }) {
  const {
    paddingBottom,
    titleBody,
    titleFooter,
    titleLeft,
    titleRight,
    widthImage,
    listImage,
  } = data || {};
  return (
    <section
      style={paddingBottom ? { paddingBottom } : {}}
      className={classes["section-digitals-content"]}
    >
      <div className="container">
        <div className={classes["section-digitals-content-head"]}>
          <h2 className={classes["section-digitals-content-head-textLeft"]}>
            {titleLeft && titleLeft}
          </h2>
          <div className={classes["section-digitals-content-head-textRight"]}>
            {titleRight && parse(titleRight)}
          </div>
        </div>
        <div className={classes["section-digitals-content-body"]}>
          <h3 className={classes["section-digitals-content-body__title"]}>
            {titleBody && titleBody}
          </h3>
          <div className={classes["section-digitals-content-body__item"]}>
            {listImage &&
              listImage.map((item, index) => (
                <div
                  style={{ width: widthImage }}
                  key={index}
                  className={
                    classes["section-digitals-content-body__item__card"]
                  }
                >
                  <div
                    className={
                      classes[
                        "section-digitals-content-body__item__card__image"
                      ]
                    }
                  >
                    <Image
                      src={item?.itemImage?.sourceUrl}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={item?.itemImage?.altText}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {item?.titleImage && (
                      <p
                        className={
                          classes[
                            "section-digitals-content-body__item__card__title"
                          ]
                        }
                      >
                        {item.titleImage}
                      </p>
                    )}
                  </div>
                </div>
              ))}
          </div>
          {titleFooter && (
            <p
              className={classes["section-digitals-content-body__titleFooter"]}
            >
              {titleFooter}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
