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
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function ExploreTheExperienceCardReview({data}) {
  if (!data) {
    return <div>Loading....</div>;
  }
  const dataCard = data;
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
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
            <p className={classes["text-review"]}>
              {`"${dataCard.contentReview}"`}
            </p>
            <div className={classes["person-info"]}>
              <div className={classes["person-info__text"]}>
                <p className={classes["person-info__text--name"]}>
                 {dataCard.name}
                </p>
                <p
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["person-info__text--position"]}
                >
                 {dataCard.position}
                </p>
              </div>
              <div className={classes["person-info__image"]}>
                <Image
                  src={dataCard.avatar}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={dataCard.name}
                />
              </div>
            </div>
          </div>
          <div className={`${classes["card-front__service"]} card-front-service`}>
            <p className={classes["title-service"]}>
              SEO & PPC Service for Personal Care Product Manufacturer
            </p>
            <hr />
            <div className={classes["content-service"]}>
              <div className={classes["content-service__project-infor"]}>
                <p className={classes["content-service__project-infor--title"]}>
                  Project Info
                </p>
                <div
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                  className={classes["content-service__project-infor--content"]}
                >
                  <p
                    className={
                      classes["content-service__project-infor--content--icon"]
                    }
                  >
                    <IconMonitor color={"#fff"} width={18} height={18} />
                    SEO, PPC
                  </p>
                  <p
                    className={
                      classes["content-service__project-infor--content--icon"]
                    }
                  >
                    <IconTag color={"#fff"} width={18} height={18} />
                    $50,000 to $199,999
                  </p>
                  <p
                    className={
                      classes["content-service__project-infor--content--icon"]
                    }
                  >
                    <IconCalendar color={"#fff"} width={18} height={18} />
                    Oct. 2022 - Ongoing
                  </p>
                </div>
              </div>
              <div className={classes["content-service__project-summary"]}>
                <p
                  className={classes["content-service__project-summary--title"]}
                >
                  Project Summary
                </p>
                <p
                  className={
                    classes["content-service__project-summary--content"]
                  }
                  style={{ fontFamily: MavenPro.style.fontFamily }}
                >
                  On Digitals provides ongoing SEO services for a personal care
                  product manufacturer. The team is responsible for SEO audit,
                  keyword study, content generation, and link-building
                  procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["card-back"]}>
          <div className={`${classes["card-back__rating"]} card-back-rating`}>
            <div className={classes["card-back__rating__point"]}>
              <p className={classes["card-back__rating__point--text"]}>
               {`Rating: ${dataCard.pointRating}`}
              </p>
              <div className={classes["card-back__rating__point--icon"]}>
                <IconStar
                  color={"rgba(255, 0, 50, 1)"}
                  width={24}
                  height={24}
                />
                <IconStar
                  color={"rgba(255, 0, 50, 1)"}
                  width={24}
                  height={24}
                />
                <IconStar
                  color={"rgba(255, 0, 50, 1)"}
                  width={24}
                  height={24}
                />
                <IconStar
                  color={"rgba(255, 0, 50, 1)"}
                  width={24}
                  height={24}
                />
                 <IconStar
                  color={"rgba(255, 0, 50, 1)"}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <hr />
            <div className={classes["card-back__rating__detail"]}>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["card-back__rating__detail--point"]}
              >
                <p>Quality:</p>
                <p>{dataCard.pointRating}</p>
              </div>
              <div className={classes["card-back__rating__detail--point"]}>
                <p>Schedule:</p>
                <p>{dataCard.pointRating}</p>
              </div>
              <div className={classes["card-back__rating__detail--point"]}>
                <p>Cost:</p>
                <p>{dataCard.pointRating}</p>
              </div>
              <div className={classes["card-back__rating__detail--point"]}>
                <p>Willing to Refer:</p>
                <p>{dataCard.pointRating}</p>
              </div>
            </div>
          </div>
          <div className={classes["card-back__feedback"]}>
            <p className={classes["card-back__feedback__title"]}>
              Feedback Summary
            </p>
            <p
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["card-back__feedback__content"]}
            >
              Thanks to On Digitals, the client's online visibility, search
              engine rankings, organic search results, and website traffic have
              experienced steady growth. The team's well-structured workflow and
              open communication have been beneficial. They have been
              accommodating, understanding, and responsive.
            </p>
            <div className={classes["card-back__feedback__btn-read-full"]}>
              <ButtonNoBorder color={"#131114"} href={"#"}>
                Read full review
              </ButtonNoBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
