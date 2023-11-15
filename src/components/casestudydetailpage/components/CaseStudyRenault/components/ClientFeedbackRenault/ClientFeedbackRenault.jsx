import React from "react";
import classes from "./ClientFeedbackRenault.module.scss";
import Image from "next/image";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "@/components/ui/Icons/TopRightArrow";

export default function ClientFeedbackRenault() {
  return (
    <section className={classes["client-feedback-renault"]}>
      <div className="container ">
        <div className={classes["client-feedback-renault__content"]}>
          <div className={classes["client-feedback-renault__content__left"]}>
            <p
              className={
                classes["client-feedback-renault__content__left__title"]
              }
            >
              Client feedback
            </p>
            <div
              className={
                classes["client-feedback-renault__content__left__content"]
              }
            >
              <p
                className={
                  classes[
                    "client-feedback-renault__content__left__content__text"
                  ]
                }
              >
                “On Digitals has done a great job creating and building the CMS
                for our website. Thanks to their expertise and the ongoing
                technical support, we were able to update and adjust our website
                in super-quick time.”
              </p>
              <p
                className={
                  classes[
                    "client-feedback-renault__content__left__content__textbellow"
                  ]
                }
              >
                - Marketing Assistant Manager, CT-Wearnes Vietnam
              </p>
            </div>
          </div>
          <div className={classes["client-feedback-renault__content__right"]}>
            <div
              className={
                classes["client-feedback-renault__content__right__image"]
              }
            >
              <Image
                src="https://s3-alpha-sig.figma.com/img/5d4b/2a79/7666c577a2fbc182a37376e3ec5c7a77?Expires=1699228800&Signature=HlATwjIt9lCEJiDRIy6ynExkVxV-MvlaKDBunCivR2ZP6RkRW6N~a~JPsefmhzo0-EguU5oPd~pWaXEcpxBL28gD5qteuvLSeTQaSTm1qeKcv-PZU5bfhdTMPKAwF6vtdOdRFoN0DJk9d4BE-HVljQVZUJCKpZmon5CrpO~GaGxOeLvkFNxjaj~fynFHbFxY-6eBeDNLMjXCpp7TOqr1wrKb1MVw1C21vm9AZo6ymUKas3a58TEkB6iCled71CeBgKV1uyPkn~V7ZfeTOVzHlfuDGzH74WA-BNvHw2lCqhsXPwcUkHBD0iwyBXPjYwgvTF13nIAqfBSluQE5BTm4bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["client-feedback-renault__button"]}>
        <ButtonNoBorder
          href="#"
          textSize="md"
          RightIcon={<TopRightArrow width={24} height={24} color="#fff" />}
        >
          BACK TO SERVICE
        </ButtonNoBorder>
      </div>
    </section>
  );
}
