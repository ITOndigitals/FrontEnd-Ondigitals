import React from "react";
import classes from "./SectionVideoSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { isMov } from "../../../../../utils/checkVideoFormat";
export default function SectionVideoSlide({ data }) {
  const { backgroundColor, listVideoSlide } = data;
  return (
    <>
      <div
        style={{ backgroundColor: backgroundColor }}
        className={classes["section-video-main"]}
      >
        <div className={classes["section-video-main__slider"]}>
          <Swiper
            autoplay={{
              delay: 60000,
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
                    <source
                      src={item.linkVideo}
                      type={isMov(item.linkVideo) ? "video/quicktime" : "video/mp4"}

                    />
                  </video>
                  <p className={classes["section-video-main__slider__title"]}>
                    {item?.titleVideo}
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
