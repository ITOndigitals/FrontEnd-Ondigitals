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
export default function NewAndInsightsSection({ data, NavButton }) {
  const listPosts = data.allPosts;

  return (
    <>
      <section
        className={`${classes["section-new-insights"]} insights-section`}
      >
        <div className="container">
          <div className={`${classes["section-new-insights__title"]} appear`}>
            <p className={`${classes["section-new-insights__title--left"]}`}>
              News & Insights
            </p>
            <p className={`${classes["section-new-insights__title--right"]}`}>
              Get update with latest Digital news and insights
            </p>
          </div>
          <div
            className={`${classes["section-new-insights__content"]} appear-slow `}
          >
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              freeMode={true}
              autoplay={{
                delay: 2500000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
              modules={[Navigation, Pagination, Autoplay, FreeMode]}
              className="news-insights-swiper "
            >
              {listPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <BlogCard data={post} isForSlider />
                  {/* <NewPostCard data={post} /> */}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={`${classes["button-discover-more"]}`}>
              <ButtonNoBorder
                href="#"
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
                Discover more
              </ButtonNoBorder>
            </div>
          </div>
        </div>
        {NavButton && NavButton}
      </section>
    </>
  );
}
