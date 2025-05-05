import React from "react";
import classes from "./CountryList.module.scss";
import Image from "next/image";
import Link from "next/link";

const parse = require("html-react-parser");
export default function CountryList({ data }) {
  if (!data) return null;
  const { textLeft, textRight, listItemCountry } = data;
  return (
    <section className={classes["section-country-list"]}>
      <div className="container">
        <div className={classes["section-country-list__content"]}>
          <div className={classes["section-country-list__content__head"]}>
            <div
              className={classes["section-country-list__content__head__left"]}
            >
              {textLeft && parse(textLeft)}
            </div>
            <div
              className={classes["section-country-list__content__head__right"]}
            >
              {textRight && parse(textRight)}
            </div>
          </div>
          <div className={classes["section-country-list__content__body"]}>
            <div
              className={
                classes["section-country-list__content__body__list-item"]
              }
            >
              {listItemCountry &&
                listItemCountry.map((item, index) => {
                  const Wrapper = item?.linkItem ? Link : "div";
                  const wrapperProps = item?.linkItem
                    ? { href: item.linkItem }
                    : {};

                  return (
                    <Wrapper
                      key={index}
                      {...wrapperProps}
                      className={
                        classes[
                          "section-country-list__content__body__list-item__flag"
                        ]
                      }
                    >
                      <span
                        className={
                          classes[
                            "section-country-list__content__body__list-item__flag__image"
                          ]
                        }
                      >
                        <Image
                          src={item?.image?.sourceUrl}
                          fill
                          style={{ objectFit: "cover" }}
                          alt={item?.image?.altText || "flag"}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                      </span>
                      <p
                        className={
                          classes[
                            "section-country-list__content__body__list-item__flag__text"
                          ]
                        }
                      >
                        {item?.text}
                      </p>
                    </Wrapper>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
