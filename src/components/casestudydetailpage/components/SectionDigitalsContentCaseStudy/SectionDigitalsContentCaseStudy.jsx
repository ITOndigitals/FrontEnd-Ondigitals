import React from "react";
import classes from "./SectionDigitalsContentCaseStudy.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SectionVideoSlide from "../SectionVideoSlide/SectionVideoSlide";
import SectionVideoSingle from "../SectionVideoSingle/SectionVideoSingle";
import { Maven_Pro } from "next/font/google";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function SectionDigitalsContentCaseStudy({ data }) {
  const {
    backgroundColor,
    titleLeft,
    titleRight,
    textDecs,
    titleListImage,
    widthImage,
    heightImage,
    objectFitImage,
    listImage,
    layoutVideo,
    textColor,
  } = data || {};
  return (
    <section
      style={{ backgroundColor: backgroundColor, color: textColor }}
      className={classes["section-digitals-content"]}
    >
      <div className="container">
        <div className={classes["section-digitals-content-head"]}>
          <h2 className={classes["section-digitals-content-head-textLeft"]}>
            {titleLeft && titleLeft}
          </h2>
          <div className={classes["section-digitals-content-head-textRight"]}>
            {titleRight && parse(titleRight)}
            <TopRightArrow width={24} height={24} color={textColor} />
          </div>
        </div>
        <div
          style={{ fontFamily: MavenPro.style.fontFamily }}
          className={classes["section-digitals-content-decs"]}
        >
          {textDecs && parse(textDecs)}
        </div>
        {listImage && (
          <div className={classes["section-digitals-content-body"]}>
            <h3 className={classes["section-digitals-content-body__title"]}>
              {titleListImage && titleListImage}
            </h3>
            <div className={classes["section-digitals-content-body__item"]}>
              {listImage &&
                listImage.map((item, index) => (
                  <div
                    style={{ width: widthImage }}
                    key={index}
                    className={`${
                      classes["section-digitals-content-body__item__card"]
                    } 
                      ${listImage.length > 3 ? classes.cards : ""}`}
                  >
                    <div
                      style={{ height: heightImage }}
                      className={`${
                        classes[
                          "section-digitals-content-body__item__card__image"
                        ]
                      } 
                        ${listImage.length <= 1 ? classes.singleimage : ""}`}
                    >
                      <Image
                        src={item?.imageItem?.sourceUrl}
                        fill
                        style={{ objectFit: objectFitImage }}
                        alt={item?.imageItem?.altText}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
          </div>
        )}
        {layoutVideo &&
          layoutVideo.map((item, index) => (
            <div style={{ marginTop: "50px" }} key={index}>
              {item?.listVideoSlide ? (
                <SectionVideoSlide data={item} />
              ) : (
                <SectionVideoSingle data={item} />
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
