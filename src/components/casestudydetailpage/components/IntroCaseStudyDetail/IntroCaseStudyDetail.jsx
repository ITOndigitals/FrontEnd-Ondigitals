import React from "react";
import classes from "./IntroCaseStudyDetail.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function IntroCaseStudyDetail() {
  return (
    <section className={classes["intro-case-study-detail"]}>
      <div
        className={classes["intro-case-study-detail-wrapper"]}
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/1b43/abeb/43a81b5b45fad391bd8d77acdefdd273?Expires=1698019200&Signature=KyqiymrcY8MuioaldgwcO-oUV~Z2qsyL89StZwkIM9JtfWa6Ex9uRjn5-GKAFqtwoG54UhMgw7o3gKApg0twhOEwiF0WVK1pdgq3Xb0~9Ftil5rONOdGIZwAtufhOIRLv99V-5TMQiA5qTHHuc8AvttW-jS2C~qhF~Eekr0MrIJN-WTd~RvGAHGDOb4abs3oNo86f2IYdaUpi8rBDv6urmiS9drPPFfejpXLorDvkNjc4fiabQx4M4tSK69g8twGEGnBT0~wuOQcL44cYCnTRnPC0K01M0yvDFBN1Z5iAfg1UQ4edJq5yY7f0BPyH229DJWihJTk7WjGsoM9uMRzlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`,
        }}
      >
        <div className="container">
          <div
            className={`${classes["intro-case-study-detail-card"]} ${classes["purple-theme"]}`}
          >
            <div
              className={`${classes["intro-case-study-detail-spacer"]}`}
            ></div>
            <div className={classes["intro-case-study-detail-heading"]}>
              <p className={classes["intro-case-study-detail-heading__title"]}>
                KUNDAL
              </p>
              <p className={classes["intro-case-study-detail-heading__desc"]}>
                Digital Marketing Campaign
              </p>
            </div>
            <hr />
            <div
              className={classes["intro-case-study-detail-body"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              <p
                className={classes["intro-case-study-detail-body__heading"]}
              >
                Services
              </p>
              <ul
                className={classes["intro-case-study-detail-body-list"]}
              >
                <li
                  className={classes["intro-case-study-detail-body-item"]}
                >
                  Content Marketing
                </li>
                <li
                  className={classes["intro-case-study-detail-body-item"]}
                >
                  Facebook Ads
                </li>
                <li
                  className={classes["intro-case-study-detail-body-item"]}
                >
                  Creative Design
                </li>
                <li
                  className={classes["intro-case-study-detail-body-item"]}
                >
                  KOL Marketing
                </li>
                <li className={classes["intro-case-study-detail-body-item"]}>
                  Video Marketing
                </li>
              </ul>
            </div>
            <hr />
            <div
              className={classes["intro-case-study-detail-footer"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              <p>Case Study - 2020</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={classes["intro-case-study-detail__content"]}>
        <div className={classes["intro-case-study-detail__content__heading"]}>
          <p
            className={
              classes["intro-case-study-detail__content__heading__title"]
            }
          >
            KUNDAL
          </p>
          <p
            className={
              classes["intro-case-study-detail__content__heading__text"]
            }
          >
            Digital Marketing Campaign
          </p>
        </div>
        <hr />
        <div className={classes["intro-case-study-detail__content__service"]}>
          <p
            className={
              classes["intro-case-study-detail__content__service__title"]
            }
          >
            SERVICES
          </p>
          <ul>
            <li>Content Marketing</li>
            <li>Facebook Ads</li>
            <li>Creative Design</li>
            <li>KOL Marketing</li>
            <li>Video Marketing</li>
          </ul>
        </div>
        <hr />
        <div className={classes["intro-case-study-detail__content__footer"]}>
          <p>Case Study - 2020</p>
        </div>
      </div> */}
    </section>
  );
}
