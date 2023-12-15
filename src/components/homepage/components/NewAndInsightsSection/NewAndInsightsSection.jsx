import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import classes from "./NewAndInsightsSection.module.scss";
import NewPostCard from "./NewPostCard";
import BlogCard from "@/components/ui/BlogCard/BlogCard";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import { useRouter } from "next/router";
export default function NewAndInsightsSection({
  data,
  NavButton,
  dataHomepage,
}) {
  const { locale } = useRouter();
  const listPosts = data;
  const { pages } = dataHomepage;
  const {
    newSectionTitle,
    newSectionTextReadFull,
    newSectionTextButton,
    newSectionTextDesc,
  } = pages.nodes[0].homePageInputContent || {};

  const languagePaths = {
    en: "/blog",
    vi: "/bai-viet",
  };

  const basePath = languagePaths[locale] || "/blog";
  return (
    <>
      <section
        className={`${classes["section-new-insights"]} insights-section`}
      >
        <div className="container">
          <div className={`${classes["section-new-insights__title"]} appear`}>
            <h2 className={`${classes["section-new-insights__title--left"]}`}>
              {newSectionTitle}
            </h2>
            <p className={`${classes["section-new-insights__title--right"]}`}>
              {newSectionTextDesc}
            </p>
          </div>
          <div
            className={`${classes["section-new-insights__content"]} appear-slow `}
          >
            <Swiper
              cssMode={true}
              loop={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
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
                  slidesPerView: 3,
                  spaceBetween: 0,
                  slidesPerGroup: 3,
                },
              }}
              modules={[Navigation, Pagination, Autoplay, FreeMode]}
              className="news-insights-swiper "
            >
              {listPosts &&
                listPosts.map((post) => (
                  <SwiperSlide key={post.id}>
                    <NewPostCard data={post} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className={`${classes["button-discover-more"]}`}>
              <ButtonNoBorder
                href={basePath}
                textSize="md"
                RightIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="#131114"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7H17V17"
                      stroke="#131114"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                {newSectionTextButton}
              </ButtonNoBorder>
            </div>
          </div>
        </div>
        {NavButton && NavButton}
      </section>
    </>
  );
}
