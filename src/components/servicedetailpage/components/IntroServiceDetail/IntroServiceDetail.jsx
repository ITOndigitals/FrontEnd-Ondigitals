import React from "react";
import classes from "./IntroServiceDetail.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getLanguagePathContact, localeLangButtonServiceChild } from "../../../../../utils/languageSlug";
const parse = require("html-react-parser");

export default function IntroServiceDetail({ data }) {
  const { title, content, featuredImage, serviceHomepage } = data || [];
  const backgroundColor = serviceHomepage?.color || "#3D1766";
  const { locale } = useRouter();
  return (
    <section
      style={{ backgroundColor }}
      className={classes["intro-service-detail"]}
    >
      <div className="container">
        <div className={classes["intro-service-detail__content"]}>
          <div className={classes["intro-service-detail__content__text"]}>
            <h1
              className={
                classes["intro-service-detail__content__text__heading"]
              }
            >
              {title}
            </h1>
            <p
              className={classes["intro-service-detail__content__text__title"]}
            >
              {serviceHomepage?.titleBelowTextHeadingPageServiceDetail}
            </p>
            <div
              className={classes["intro-service-detail__content__text__detail"]}
            >
              {content && parse(content)}
            </div>

            <Link
              className={classes["intro-service-detail__content__text__btn"]}
              href={getLanguagePathContact(locale)}
            >
             {localeLangButtonServiceChild[locale]}
            </Link>
          </div>
          <div className={classes["intro-service-detail__content__image"]}>
            <div
              className={
                classes["intro-service-detail__content__image__content"]
              }
            >
              <Image
                src={featuredImage?.node.sourceUrl}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={featuredImage?.node.altText}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
