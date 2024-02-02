import React from "react";
import classes from "./SectionWho.module.scss";
import CardSectionWho from "./CardSectionWho";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function SectionWho({ data }) {
  const {
    projectCardShort,
    textLeftHead,
    textRightHead,
    backgroundColor,
    color,
  } = data;
  if (!data) {
    return null;
  }
  return (
    <section
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#DCC7ED" }}
      className={classes["section-who"]}
    >
      <div className="container">
        <div
          style={{
            color: color ? color : "#131114",
          }}
          className={classes["section-who__head"]}
        >
          <div className={classes["section-who__head__left"]}>
            {textLeftHead && parse(textLeftHead)}
          </div>
          <div className={classes["section-who__head__right"]}>
            <div
              className={classes["section-who__head__right__text"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              {textRightHead && parse(textRightHead)}
            </div>
          </div>
        </div>
        <div className={classes["section-who__body"]}>
          <Swiper
            cssMode={true}
            pagination={{
              clickable: true,
            }}
            freeMode={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 15,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
                slidesPerGroup: 3,
              },
            }}
            modules={[Autoplay, FreeMode, Pagination]}
            className="section-who-service"
          >
            {projectCardShort &&
              projectCardShort.map((item, index) => (
                <SwiperSlide key={index}>
                  <CardSectionWho data={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
