import React from "react";
import classes from "./SectionVideoCaseStudy.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
export default function SectionVideoCaseStudy({ data }) {
  const {
    backgroundColor,
    backgroundColorVideoSingle,
    marginBottom,
    marginTop,
    titleLeft,
    titleRight,
    titleSlider,
    listVideoSlide,
    listVideoSingle,
  } = data || {};
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={classes["section-video"]}
    >
      <div className="container">
        <div className={classes["section-video-main"]}>
          <div
            className={classes["section-video-main__slider"]}
          >
            <Swiper
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="section-video-case-study"
            >
              {listVideoSlide &&
                listVideoSlide.map((item, index) => (
                  <SwiperSlide key={index}>
                    <video muted controls playsInline>
                      <source src={item.linkVideo} type="video/webm" />
                    </video>
                  </SwiperSlide>
                ))}
            </Swiper>
            <p className={classes["section-video-main__slider__title"]}>
              {titleSlider && titleSlider}
            </p>
          </div>
          {/* <div
            style={{
              marginBottom: marginBottom,
              backgroundColor: backgroundColorVideoSingle,
            }}
            className={classes["section-video-main__singleVideo"]}
          >
            <p
              className={classes["section-video-main__singleVideo__titleLeft"]}
            >
              {titleLeft && titleLeft}
            </p>
            <div className={classes["section-video-main__singleVideo__item"]}>
              {listVideoSingle &&
                listVideoSingle.map((item, index) => (
                  <video key={index} muted controls playsInline>
                    <source src={item.linkVideo} type="video/webm" />
                  </video>
                ))}
            </div>
            <p
              className={classes["section-video-main__singleVideo__titleRight"]}
            >
              {titleRight && titleRight}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
