import React from "react";
import classes from "./ClientFeedbacks.module.scss";
import ExploreTheExperienceCardReview from "@/components/ui/ExploreTheExperienceCardReview/ExploreTheExperienceCardReview";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";

export default function ClientFeedbacks({ data }) {
  const { backgroundcolor, buttonLink, headTitle, textBelowTitle, nodes } =
    data;
  return (
    <section
      style={{ backgroundColor: backgroundcolor }}
      className={classes["client-feedbacks"]}
    >
      <div className="container">
        <div className={classes["client-feedbacks__content"]}>
          <div className={classes["client-feedbacks__content__head"]}>
            <h2 className={classes["client-feedbacks__content__head__title"]}>
              {headTitle && headTitle}
            </h2>
            <p className={classes["client-feedbacks__content__head__text"]}>
              {textBelowTitle}
            </p>
          </div>
          <div className={classes["client-feedbacks__content__card"]}>
            {nodes &&
              nodes.map((item) => (
                <div
                  className={`${classes["client-feedbacks__content__card__item"]} card-service-detail`}
                  key={item.card_reviewId}
                >
                  <ExploreTheExperienceCardReview data={item.cardReview}  />
                </div>
              ))}
          </div>
          <div className={classes["client-feedbacks__content__btn"]}>
            <ButtonNoBorder
              href={buttonLink?.url || "/"}
              textSize="md"
              RightIcon={<TopRightArrow width={24} height={24} color="#fff" />}
              openInNewTab={true}
              relNofollow={true}
            >
             {buttonLink?.title || "VIEW MORE"}
            </ButtonNoBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
