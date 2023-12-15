import React from "react";
import classes from "./ExploreTheExperience.module.scss";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";
import ExploreTheExperienceCardReview from "@/components/ui/ExploreTheExperienceCardReview/ExploreTheExperienceCardReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper/modules";

export default function ExploreTheExperience({ data }) {
  const { sectionExploreTheExperience, allCardReviews } = data;
  const { titleSection, buttonLink } = sectionExploreTheExperience;
  const dataCardReviews = allCardReviews.nodes;
  return (
    <>
      <section className={classes["explore-the-experience"]}>
        <div className="container">
          <div className={classes["header"]}>
            <div className={classes["header__text"]}>
              <p className={classes["header__text__title"]}>
                {titleSection && titleSection}
              </p>
            </div>
            <div className={classes["header__btn"]}>
              <ButtonNoBorder
                href={buttonLink?.url || "/"}
                textSize="md"
                RightIcon={
                  <TopRightArrow width={24} height={24} color="#fff" />
                }
              >
                {buttonLink?.title ||" VIEW ALL"}
              </ButtonNoBorder>
            </div>
          </div>
          <div className={classes["main-content"]}>
            <Swiper
              // mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
                700: {
                  slidesPerView: 2.1,
                  spaceBetween: 15,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 24,
                  slidesPerGroup: 3,
                },
              }}
              className="slider-explore-page-about-us"
            >
              {dataCardReviews.map((data) => (
                <SwiperSlide key={data.card_reviewId}>
                  <ExploreTheExperienceCardReview data={data?.cardReview} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
