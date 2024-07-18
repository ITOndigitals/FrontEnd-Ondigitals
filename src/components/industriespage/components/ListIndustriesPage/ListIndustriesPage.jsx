import React from "react";
import classes from "./ListIndustriesPage.module.scss";
import Link from "next/link";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import Image from "next/image";
import { useRouter } from "next/router";
const parse = require("html-react-parser");

export default function ListIndustriesPage({ data }) {
  const { pageBy, industries } = data || {};
  const { titleLeft, titleRight, textButtonCard } =
    pageBy?.pageIndustries?.sectionContent || {};

  const { locale } = useRouter();
  return (
    <section className={classes["section-list-industries"]}>
      <div className="container">
        <div className={classes["section-list-industries__head"]}>
          <h2 className={classes["section-list-industries__head__textleft"]}>
            {titleLeft && titleLeft}
          </h2>
          <div className={classes["section-list-industries__head__textright"]}>
            {titleRight && parse(titleRight)}
          </div>
        </div>
        <div className={classes["section-list-industries__content"]}>
          {industries?.nodes &&
            industries.nodes.map((item) => {
              const { excerpt, featuredImage, serviceHomepage, slug ,id} = item;
              const urlIndustry =
                locale === "en" ? `${slug}` : `${locale}/${slug}`;
              return (
                <>
                  <div
                    key={id}
                    className={
                      classes["section-list-industries__content__card"]
                    }
                    style={{
                      backgroundColor: serviceHomepage?.color
                        ? serviceHomepage?.color
                        : "#3d1766",
                    }}
                  >
                    <div
                      className={
                        classes["section-list-industries__content__card__text"]
                      }
                    >
                      <h3
                        className={
                          classes[
                            "section-list-industries__content__card__text__title"
                          ]
                        }
                      >
                        <Link href={urlIndustry}>
                          {serviceHomepage?.name && serviceHomepage.name}
                        </Link>
                      </h3>
                      <div
                        className={
                          classes[
                            "section-list-industries__content__card__text__detail"
                          ]
                        }
                      >
                        {excerpt && parse(excerpt)}
                      </div>
                      <div>
                        <Link href={urlIndustry}>
                          <ExploreButton>{textButtonCard && textButtonCard}</ExploreButton>
                        </Link>
                      </div>
                    </div>
                    <Link
                      className={
                        classes["section-list-industries__content__card__image"]
                      }
                      href={urlIndustry}
                    >
                      <Image
                        src={featuredImage?.node?.sourceUrl}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        alt={featuredImage?.node?.altText}
                      />
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </section>
  );
}
