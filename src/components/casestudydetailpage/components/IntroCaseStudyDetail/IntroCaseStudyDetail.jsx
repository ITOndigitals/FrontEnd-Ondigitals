import React, { useEffect, useState } from "react";
import classes from "./IntroCaseStudyDetail.module.scss";
import { Maven_Pro } from "next/font/google";
import Image from "next/image";
import Tag from "@/components/ui/Tag/Tag";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function IntroCaseStudyDetail({ data }) {
  const { caseStudyDetailPage, categories, tags, content } = data.caseStudyBy;
  const {
    backgroundcolor,
    imageBackground,
    imageMoblie,
    textColor,
    logoBrand,
    titleCategory,
    titleTagIndustry,
  } = caseStudyDetailPage?.sectionIntro;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsMobile(width <= 760);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <section className={classes["intro-case-study-detail"]}>
      <div
        className={classes["intro-case-study-detail-wrapper"]}
        style={{
          backgroundImage: `url(${imageBackground?.sourceUrl})`,
          backgroundColor: backgroundcolor,
        }}
      >
        <div className={`container ${classes["content-layout-mobile"]}`}>
          <div style={{color:textColor}} className={classes["intro-case-study-detail-content"]}>
            <div className={classes["intro-case-study-detail-content__image"]}>
              <Image
                src={logoBrand?.sourceUrl}
                fill
                style={{ objectFit: "cover" }}
                alt={logoBrand?.altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className={classes["intro-case-study-detail-content__text"]}>
              {content && parse(content)}
            </div>
            <div
              className={
                classes["intro-case-study-detail-content__industry-type"]
              }
            >
              <p
                className={
                  classes[
                    "intro-case-study-detail-content__industry-type__text"
                  ]
                }
              >
                {titleTagIndustry}
              </p>
              {tags.nodes.map((item, index) => (
                <Tag
                  key={index}
                  backgroundColor={item?.description}
                  name={item?.name}
                />
              ))}
            </div>
            <div
              className={classes["intro-case-study-detail-content__cate-type"]}
            >
              <p
                className={
                  classes["intro-case-study-detail-content__cate-type__text"]
                }
              >
                {titleCategory}
              </p>
              <div
                className={
                  classes["intro-case-study-detail-content__cate-type__tag"]
                }
              >
                {categories?.nodes.map((item, index) => (
                  <Tag
                    key={index}
                    backgroundColor={item?.description}
                    name={item?.name}
                    href={item?.slug}
                  />
                ))}
              </div>
            </div>
          </div>
          {isMobile && (
            <div className={classes["intro-case-study-detail__image-moblile"]}>
              <Image
                src={imageMoblie?.sourceUrl}
                fill
                style={{ objectFit: "cover" }}
                alt={imageMoblie?.altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
