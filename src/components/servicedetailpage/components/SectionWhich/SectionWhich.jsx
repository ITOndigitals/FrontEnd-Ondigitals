import React from "react";
import classes from "./SectionWhich.module.scss";
import Image from "next/image";
import { Content, Maven_Pro } from "next/font/google";
import VideoPlayer from "@/components/ui/VideoPlayer/VideoPlayer";

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
  } = data;
  const isUseVideo = layoutContentSectionWhich[0]?.urlVideo;
  const layOut3Card = uselayout3card
    ? classes["section-which__content__layout3"]
    : "";
  const isCardHasTitle = layoutContentSectionWhich[0]?.card;
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
                const { card, title, backgroundCardColor,uselayout3cards } = item;
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
                          const { title, textContent, imageCard } = item;
                          return (
                            <div
                              key={index}
                              className={`${
                                classes["section-which__content__card"]
                              } ${uselayout3cards && classes["section-which__content__layout3"]}`}
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
                                <div
                                  className={
                                    classes[
                                      "section-which__content__card__image__item"
                                    ]
                                  }
                                >
                                  <Image
                                    src={imageCard?.sourceUrl}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                    }}
                                    width="0"
                                    height="0"
                                    alt={imageCard?.altText}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                  />
                                </div>
                              </div>
                              <div
                                className={
                                  classes["section-which__content__card__text"]
                                }
                              >
                                <div
                                  className={
                                    classes[
                                      "section-which__content__card__text__title"
                                    ]
                                  }
                                >
                                  {title && parse(title)}
                                </div>
                                <div
                                  style={{
                                    fontFamily: MavenPro.style.fontFamily,
                                  }}
                                  className={
                                    classes[
                                      "section-which__content__card__text__detail"
                                    ]
                                  }
                                >
                                  {textContent && parse(textContent)}
                                </div>
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
                const { textContent, title, imageCard } = item;
                return (
                  <div
                    key={index}
                    className={`${classes["section-which__content__card"]} ${layOut3Card}`}
                  >
                    <div
                      className={classes["section-which__content__card__image"]}
                    >
                      <div
                        className={
                          classes["section-which__content__card__image__item"]
                        }
                      >
                        <Image
                          src={imageCard?.sourceUrl}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          width="0"
                          height="0"
                          alt={imageCard?.altText}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                        />
                      </div>
                    </div>
                    <div
                      className={classes["section-which__content__card__text"]}
                    >
                      <div
                        className={
                          classes["section-which__content__card__text__title"]
                        }
                      >
                        {title && parse(title)}
                      </div>
                      <div
                        className={
                          classes["section-which__content__card__text__detail"]
                        }
                      >
                        {textContent && parse(textContent)}
                      </div>
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
