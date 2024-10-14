import React from "react";
import classes from "./SectionWhich.module.scss";
import Image from "next/image";
import { Content, Maven_Pro } from "next/font/google";
import VideoPlayer from "@/components/ui/VideoPlayer/VideoPlayer";
import Link from "next/link";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function SectionWhich({ data }) {
  if (!data) {
    return null;
  }
  const {
    backgroundColor,
    textHeadingRight,
    textHeadingLeft,
    layoutContentSectionWhich,
    uselayout3card,
    widthCard,
  } = data;
  const isUseVideo = layoutContentSectionWhich[0]?.urlVideo;
  const layOut3Card = uselayout3card
    ? classes["section-which__content__layout3"]
    : "";
  const styleWidht = widthCard ? { width: widthCard } : {};

  const isCardHasTitle = layoutContentSectionWhich[0]?.card;

  const ImageCard = ({ urlCard, imageCard, title, classes }) => {
    const ImageComponent = () => (
      <Image
        src={imageCard?.sourceUrl}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        width="0"
        height="0"
        alt={imageCard?.altText}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
    );

    const TitleComponent = () => (
      <div className={classes["section-which__content__card__text__title"]}>
        {title && parse(title)}
      </div>
    );

    if (urlCard) {
      return (
        <>
          <Link
            href={urlCard}
            className={classes["section-which__content__card__image__item"]}
          >
            <ImageComponent />
          </Link>
          <Link
            href={urlCard}
            className={classes["section-which__content__card__text__title"]}
          >
            {title && parse(title)}
          </Link>
        </>
      );
    } else {
      return (
        <>
          <div className={classes["section-which__content__card__image__item"]}>
            <ImageComponent />
          </div>
          <TitleComponent />
        </>
      );
    }
  };

  return (
    <section
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#6F1AB6" }}
      className={classes["section-which"]}
    >
      <div className="container">
        <div className={classes["section-which__head"]}>
          <div className={classes["section-which__head__left"]}>
            {textHeadingLeft && parse(textHeadingLeft)}
          </div>
          <div className={classes["section-which__head__right"]}>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["section-which__head__right__text"]}
            >
              {textHeadingRight && parse(textHeadingRight)}
            </div>
          </div>
        </div>
        {isUseVideo ? (
          <div className={classes["section-which__content-video"]}>
            {layoutContentSectionWhich &&
              layoutContentSectionWhich.map((item, index) => {
                const { content, title, urlVideo, videoDescription } = item;
                return (
                  <div
                    key={index}
                    className={classes["section-which__content-video__detail"]}
                  >
                    <div
                      className={
                        classes["section-which__content-video__detail__left"]
                      }
                    >
                      <VideoPlayer url={urlVideo} />
                      <div
                        style={{ fontFamily: MavenPro.style.fontFamily }}
                        className={
                          classes[
                            "section-which__content-video__detail__left__description"
                          ]
                        }
                      >
                        {videoDescription && parse(videoDescription)}
                      </div>
                    </div>
                    <div
                      className={
                        classes["section-which__content-video__detail__right"]
                      }
                    >
                      <div
                        className={
                          classes[
                            "section-which__content-video__detail__right__title"
                          ]
                        }
                      >
                        {title && parse(title)}
                      </div>
                      <div
                        style={{ fontFamily: MavenPro.style.fontFamily }}
                        className={
                          classes[
                            "section-which__content-video__detail__right__content"
                          ]
                        }
                      >
                        {content && parse(content)}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : isCardHasTitle ? (
          <div>
            {layoutContentSectionWhich &&
              layoutContentSectionWhich.map((item, index) => {
                const { card, title, backgroundCardColor, uselayout3cards } =
                  item;
                return (
                  <div key={index}>
                    <div
                      style={{ fontFamily: MavenPro.style.fontFamily }}
                      className={classes["title-list-card-has-title"]}
                    >
                      {title && parse(title)}
                    </div>
                    <div
                      style={{
                        justifyContent: isCardHasTitle
                          ? "center"
                          : "flex-start",
                      }}
                      className={classes["section-which__content"]}
                    >
                      {card &&
                        card.map((item, index) => {
                          const { title, imageCard,urlCard } = item;
                          return (
                            <div
                              style={styleWidht}
                              key={index}
                              className={`${
                                classes["section-which__content__card"]
                              } ${
                                uselayout3cards &&
                                classes["section-which__content__layout3"]
                              }`}
                            >
                              <div
                                style={{
                                  backgroundColor: backgroundCardColor
                                    ? backgroundCardColor
                                    : "#3D1766",
                                }}
                                className={
                                  classes["section-which__content__card__image"]
                                }
                              >
                                <ImageCard
                                  urlCard={urlCard}
                                  imageCard={imageCard}
                                  title={title}
                                  classes={classes}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div
            style={{ justifyContent: layOut3Card ? "center" : "flex-start" }}
            className={classes["section-which__content"]}
          >
            {layoutContentSectionWhich &&
              layoutContentSectionWhich.map((item, index) => {
                const { title, imageCard, urlCard } = item;
                return (
                  <div
                    style={styleWidht}
                    key={index}
                    className={`${classes["section-which__content__card"]} ${layOut3Card}`}
                  >
                    <div
                      className={classes["section-which__content__card__image"]}
                    >
                      <ImageCard
                        urlCard={urlCard}
                        imageCard={imageCard}
                        title={title}
                        classes={classes}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
}
