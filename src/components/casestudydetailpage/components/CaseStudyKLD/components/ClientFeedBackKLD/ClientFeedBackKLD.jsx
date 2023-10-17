import React from "react";
import classes from "./ClientFeedBackKLD.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function ClientFeedBackKLD() {
  return (
    <section className={classes["client-feed-back"]}>
      <div className="container">
        <div className={classes["client-feed-back__content"]}>
          <p className={classes["client-feed-back__content__title"]}>
            Client feedback
          </p>
          <div className={classes["client-feed-back__content__detail"]}>
            <div className={classes["client-feed-back__content__detail__left"]}>
              <div
                className={
                  classes["client-feed-back__content__detail__left__image"]
                }
              >
                <Image
                  src="https://s3-alpha-sig.figma.com/img/2aab/ca48/559cb8bf6ddc12df71bce5fa2556c174?Expires=1698019200&Signature=JiXyVTRJcV4kiOqH1p1TSk7dcBkkQpKd2J4lejJsmUMjxo4m9cld8xtZ5C5z5uMEFgyO1LpWouYQg5bHthcbPYC7wz9AkmdSgY82YosCsdPu4OjXJzm93RDVZn3nIp14nzUbvAQCMlo-y2jhQkjqSBhWZTVaFTu9I4FNSrVMCkPug4wECK9w7SGu1NK-iehdhPfLQTnL8jtqu1SKu~3kV3IxMI5RXhJbWVxbUHT6aEqU0XFSfJNMEtQe-pOYmJ2LHF9o1Qz244Qc0UV2AkRSd4c0cY~5wsCqLMMWgoqCZblJN9Z83YYzQRq0Uy-1pNDYre2Qom5gxnxi4jzJqwuw0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="text"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
            <div
              className={classes["client-feed-back__content__detail__right"]}
            >
              <p
                className={
                  classes["client-feed-back__content__detail__right__text"]
                }
              >
                “We all started from ground zero. Then On Digitals helped create
                strong brand positioning for Kim Long Diep in the jewelry
                market. We have also received lots of positive feedback and
                attention from both local and worldwide customers.”
              </p>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={
                  classes["client-feed-back__content__detail__right__owner"]
                }
              >
                - Diep Nguyen, the owner of Kim Long Diep jewelry store
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
