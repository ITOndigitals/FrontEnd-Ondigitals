import React, { useState } from "react";
import classes from "./ExploreTheExperienceCardReview.module.scss";
import Image from "next/image";
import {
  IconCalendar,
  IconMonitor,
  IconStar,
  IconTag,
} from "../Icons/ListIcon";
import { Maven_Pro } from "next/font/google";
import ButtonNoBorder from "../Buttons/ButtonNoBorder/ButtonNoBorder";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function ExploreTheExperienceCardReview({ data }) {
  if (!data) {
    return <div>Loading....</div>;
  }
  const { contentCardReview } = data || {};
  const {
    contentProjectSummary,
    contentReview,
    titleService,
    titleProjectSummary,
    titleProjectInfo,
    position,
    name,
    detailProjectInfo,
    avatar,
  } = contentCardReview[0] || {}; // data card front
  const {
    feedbackContent,
    feedbackTitle,
    linkReadFull,
    numberStart,
    ratingDetails,
    textPointRating,
  } = contentCardReview[1] || {}; // data card back
  if (!data) {
    return <div>Loading....</div>;
  }
  const dataCard = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  const iconComponents = {
    1: <IconMonitor color={"#fff"} width={18} height={18} />,
    2: <IconTag color={"#fff"} width={18} height={18} />,
    3: <IconCalendar color={"#fff"} width={18} height={18} />,
  };
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <IconStar
          key={i}
          color={"rgba(255, 0, 50, 1)"}
          width={24}
          height={24}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className={`${classes["card-review"]} ${
        isFlipped ? classes["flip"] : ""
      }`}
      onClick={handleClick}
    >
      <div className={classes["card-review-main"]}>
        <div className={classes["card-front"]}>
          <div className={classes["card-front__infor"]}>
            <div className={classes["text-review"]}>
              {contentReview && parse(contentReview)}
            </div>
            <div className={classes["person-info"]}>
              <div className={classes["person-info__text"]}>
                <p className={classes["person-info__text--name"]}>
                  {name && name}
                </p>
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["person-info__text--position"]}
                >
                  {position && position}
                </div>
              </div>
              <div className={classes["person-info__image"]}>
                <Image
                  src={avatar?.sourceUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={avatar?.altText}
                />
              </div>
            </div>
          </div>
          <div
            className={`${classes["card-front__service"]} card-front-service`}
          >
            <div className={classes["title-service"]}>
              <p>{titleService && titleService}</p>
            </div>
            <hr style={{ width: "100%" }} />
            <div className={classes["content-service"]}>
              <div className={classes["content-service__project-infor"]}>
                <p className={classes["content-service__project-infor--title"]}>
                  {titleProjectInfo && titleProjectInfo}
                </p>
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["content-service__project-infor--content"]}
                >
                  {detailProjectInfo &&
                    detailProjectInfo.map((item, index) => (
                      <p
                        key={index}
                        className={
                          classes[
                            "content-service__project-infor--content--icon"
                          ]
                        }
                      >
                        {iconComponents[item.numberTypeIcon] ||
                          iconComponents[1]}
                        {item.textContent}
                      </p>
                    ))}
                </div>
              </div>
              <div className={classes["content-service__project-summary"]}>
                <p
                  className={classes["content-service__project-summary--title"]}
                >
                  {titleProjectSummary && titleProjectSummary}
                </p>
                <div
                  className={
                    classes["content-service__project-summary--content"]
                  }
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                >
                  {detailProjectInfo && parse(contentProjectSummary)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["card-back"]}>
          <div className={`${classes["card-back__rating"]} card-back-rating`}>
            <div className={classes["card-back__rating__point"]}>
              <p className={classes["card-back__rating__point--text"]}>
                {textPointRating}
              </p>
              <div className={classes["card-back__rating__point--icon"]}>
                {renderStars(numberStart)}
              </div>
            </div>
            <hr />
            <div className={classes["card-back__rating__detail"]}>
              {ratingDetails &&
                ratingDetails.map((item, index) => (
                  <div
                    key={index}
                    style={{ fontFamily: MavenPro.style.fontFamily }}
                    className={classes["card-back__rating__detail--point"]}
                  >
                    <p>{`${item?.textRating}:`}</p>
                    <p>{item?.pointRating}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className={classes["card-back__feedback"]}>
            <p className={classes["card-back__feedback__title"]}>
              {feedbackTitle && feedbackTitle}
            </p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["card-back__feedback__content"]}
            >
              {feedbackContent && parse(feedbackContent)}
            </div>
            <div className={classes["card-back__feedback__btn-read-full"]}>
              <ButtonNoBorder
                color={"#131114"}
                href={linkReadFull?.url}
                openInNewTab={true}
                relNofollow={true}
              >
                {linkReadFull?.title}
              </ButtonNoBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
