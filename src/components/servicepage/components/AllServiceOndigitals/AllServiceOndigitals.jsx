import React from "react";
import classes from "./AllServiceOndigitals.module.scss";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
export default function AllServiceOndigitals({ data }) {
  const { pageBy, services } = data;
  const { sectionCaseStudy, sectionListServices } = pageBy.pageService;
  console.log(data);
  return (
    <section className={classes["all-service-ondigitals"]}>
      <div className="container">
        <div className={classes["all-service-ondigitals__title"]}>
          <h2>{sectionListServices.title}</h2>
        </div>
        <div className={classes["all-service-ondigitals__card-main"]}>
          <div
            className={classes["all-service-ondigitals__card-main__container"]}
          >
            <h3
              className={
                classes["all-service-ondigitals__card-main__container__title"]
              }
            >
              Search Engine Optimization (SEO)
            </h3>
            <div
              className={
                classes["all-service-ondigitals__card-main__container__content"]
              }
            >
              <p
                className={
                  classes[
                    "all-service-ondigitals__card-main__container__content__text"
                  ]
                }
              >
                Unlock the power of your brand with transformative digital
                content strategies
              </p>
              <div
                className={
                  classes[
                    "all-service-ondigitals__card-main__container__content__list-card-child"
                  ]
                }
              >
                <Swiper
                  cssMode={true}
                  loop={true}
                  navigation={true}
                  freeMode={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
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
                      slidesPerView: 4,
                      spaceBetween: 15,
                      slidesPerGroup: 1,
                    },
                  }}
                  modules={[Navigation, Autoplay, FreeMode]}
                  className="list-card-services-page"
                >
                  <SwiperSlide>
                    <ServiceCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServiceCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServiceCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServiceCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ServiceCard />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div>
              <ExploreButton>How it works</ExploreButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
