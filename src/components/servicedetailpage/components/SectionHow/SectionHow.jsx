import React from "react";
import classes from "./SectionHow.module.scss";
import Image from "next/image";
import CardSectionHow from "./CardSectionHow";
import {
  IconFlagVietnam,
  IconInternational,
} from "@/components/ui/Icons/ListIcon";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function SectionHow({ data }) {
  if (!data) {
    return null;
  }
  const {
    cardStep,
    contentListSteps,
    contentPlatform,
    imageIcon,
    textLeftHead,
    textRightHead,
    titleListSteps,
  } = data;
  const {
    contentTitle,
    iconImage,
    platformGlobal,
    platformVietnam,
    textFooterPlatform,
    title,
  } = contentPlatform;
  return (
    <section className={classes["section-how"]}>
      <div className="container">
        <div className={classes["section-how__head"]}>
          <div className={classes["section-how__head__left"]}>
            {textLeftHead && parse(textLeftHead)}
          </div>
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["section-how__head__right"]}
          >
            {textRightHead && parse(textRightHead)}
          </div>
        </div>
        <div className={classes["section-how__body"]}>
          <div className={classes["section-how__body__head"]}>
            <div className={classes["section-how__body__head__icon"]}>
              <Image
                src={imageIcon?.sourceUrl}
                fill
                alt={imageIcon?.altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className={classes["section-how__body__head__text"]}>
              <p className={classes["section-how__body__head__text__title"]}>
                {titleListSteps && titleListSteps}
              </p>
              <div
                className={classes["section-how__body__head__text__content"]}
              >
                {contentListSteps && parse(contentListSteps)}
              </div>
            </div>
          </div>
          <div className={classes["section-how__body__content"]}>
            {cardStep &&
              cardStep.map((item, index) => (
                <CardSectionHow data={item} key={index} index={index} />
              ))}
          </div>
        </div>
        {contentPlatform?.title && (
          <div className={classes["section-how__footer"]}>
            <div className={classes["section-how__footer__icon"]}>
              <div className={classes["section-how__footer__icon__detail"]}>
                <Image
                  src={iconImage?.sourceUrl}
                  fill
                  alt={iconImage?.altText}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
              <div className={classes["section-how__footer__icon__text"]}>
                <p
                  className={classes["section-how__footer__icon__text__title"]}
                >
                  {title && title}
                </p>
                <div
                  className={
                    classes["section-how__footer__icon__text__content"]
                  }
                >
                  {contentTitle && parse(contentTitle)}
                </div>
              </div>
            </div>
            <div className={classes["section-how__footer__platform-list"]}>
              <div
                className={
                  classes["section-how__footer__platform-list__vietnam"]
                }
              >
                <div
                  className={
                    classes["section-how__footer__platform-list__vietnam__left"]
                  }
                >
                  <div
                    className={
                      classes[
                        "section-how__footer__platform-list__vietnam__left__flag"
                      ]
                    }
                  >
                    <IconFlagVietnam width={24} height={24} />
                    <p
                      className={
                        classes[
                          "section-how__footer__platform-list__vietnam__left__flag__name"
                        ]
                      }
                    >
                      {platformVietnam?.name && platformVietnam?.name}
                    </p>
                  </div>
                  <div
                    className={
                      classes[
                        "section-how__footer__platform-list__vietnam__left__text"
                      ]
                    }
                  >
                    {platformVietnam?.content &&
                      parse(platformVietnam?.content)}
                  </div>
                </div>
                <div
                  className={
                    classes[
                      "section-how__footer__platform-list__vietnam__right"
                    ]
                  }
                >
                  <div
                    className={`${classes["section-how__footer__platform-list__vietnam__right__list-icon"]}`}
                  >
                    {platformVietnam?.listSocialMedia &&
                      platformVietnam.listSocialMedia.map((item, index) => (
                        <div
                          key={index}
                          className={`${classes["section-how__footer__platform-list__vietnam__right__list-icon__item"]} hvr-bounce-in`}
                        >
                          <Image
                            src={item?.sourceUrl}
                            fill
                            alt={item?.altText}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <hr />
              <div
                className={
                  classes["section-how__footer__platform-list__global"]
                }
              >
                <div
                  className={
                    classes["section-how__footer__platform-list__global__left"]
                  }
                >
                  <div
                    className={
                      classes[
                        "section-how__footer__platform-list__global__left__flag"
                      ]
                    }
                  >
                    <IconInternational width={24} height={24} />
                    <p
                      className={
                        classes[
                          "section-how__footer__platform-list__global__left__flag__name"
                        ]
                      }
                    >
                      {platformGlobal?.name && platformGlobal?.name}
                    </p>
                  </div>
                  <div
                    className={
                      classes[
                        "section-how__footer__platform-list__global__left__text"
                      ]
                    }
                  >
                    {platformGlobal?.content && parse(platformGlobal?.content)}
                  </div>
                </div>
                <div
                  className={
                    classes["section-how__footer__platform-list__global__right"]
                  }
                >
                  <div
                    className={
                      classes[
                        "section-how__footer__platform-list__global__right__list-icon"
                      ]
                    }
                  >
                    {platformGlobal?.listIconImage &&
                      platformGlobal.listIconImage.map((item, index) => (
                        <div
                          key={index}
                          className={`${classes["section-how__footer__platform-list__global__right__list-icon__item"]} hvr-bounce-in`}
                        >
                          <Image
                            src={item?.sourceUrl}
                            fill
                            alt={item?.altText}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={classes["section-how__footer__text"]}>
              {textFooterPlatform && parse(textFooterPlatform)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
