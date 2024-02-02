import React from "react";
import classes from "./OurTrustedPartner.module.scss";
import { Maven_Pro } from "next/font/google";
import CounterNumber from "@/components/ui/CouterNumber/CouterNumber";
import OurTrustedPartnerImage from "./OurTrustedPartnerImage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function OurTrustedPartner({ data }) {
  if (!data) {
    return null;
  }
  const { titleSection, metricList, listImagePartners } = data[0];
  // tạo hai dòng để hiển thị ảnh
  // const createSlides = (dataImage, itemsPerSlide) => {
  //   const slides = [];
  //   for (let i = 0; i < dataImage.length; i += itemsPerSlide) {
  //     const slideItems = dataImage.slice(i, i + itemsPerSlide);
  //     slides.push(slideItems);
  //   }
  //   return slides;
  // };
  // const itemsPerSlide = 2;
  // const slides = createSlides(listImagePartners, itemsPerSlide);
  return (
    <>
      <section
        className={`${classes["our-trusted-partner"]} our-trusted-partner`}
      >
        <div className="container">
          <div className={classes["header-section"]}>
            <h2>{titleSection && titleSection}</h2>
          </div>
          <div className={classes["content-section"]}>
            <Swiper
              navigation={true}
              breakpoints={{
                100: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                },
                380: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                },
                570: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                },
              }}
              modules={[Navigation]}
              className="our-trusted-partner-slider"
            >
              {listImagePartners &&
                listImagePartners.map((item, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div className={classes["item-image-slide"]}>
                      <OurTrustedPartnerImage key={slideIndex} data={item} />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className={classes["footer-section"]}>
            <div className={classes["footer-section__content"]}>
              {metricList &&
                metricList.map((item, index) => (
                  <div
                    key={index}
                    className={classes["footer-section__content__item"]}
                  >
                    <CounterNumber
                      value={item.number}
                      classes={"our-trusted-partner"}
                      threshold={0.1}
                    />
                    <p
                      className={classes["footer-section__content__item__text"]}
                      style={{ fontFamily: MavenPro.style.fontFamily }}
                    >
                      {item.textContent}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
