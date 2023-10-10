import React from "react";
import classes from "./IntroCaseStudyDetail.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_IMG_SRC =
  "https://s3-alpha-sig.figma.com/img/1b43/abeb/43a81b5b45fad391bd8d77acdefdd273?Expires=1698019200&Signature=KyqiymrcY8MuioaldgwcO-oUV~Z2qsyL89StZwkIM9JtfWa6Ex9uRjn5-GKAFqtwoG54UhMgw7o3gKApg0twhOEwiF0WVK1pdgq3Xb0~9Ftil5rONOdGIZwAtufhOIRLv99V-5TMQiA5qTHHuc8AvttW-jS2C~qhF~Eekr0MrIJN-WTd~RvGAHGDOb4abs3oNo86f2IYdaUpi8rBDv6urmiS9drPPFfejpXLorDvkNjc4fiabQx4M4tSK69g8twGEGnBT0~wuOQcL44cYCnTRnPC0K01M0yvDFBN1Z5iAfg1UQ4edJq5yY7f0BPyH229DJWihJTk7WjGsoM9uMRzlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

// const DUMMY_IMG_SRC =
//   "https://s3-alpha-sig.figma.com/img/e3b4/d923/927eac33fa99e0bb296867fcbec62a9e?Expires=1698019200&Signature=oDq-qTNBobrp~A2Q0G0NpjxY0ydHuytPL8M9I5zyBUB1CVyU67OgKxculgieSnKSnwGkhPpogAoo1mqcRfcRbrfM6Ytwv9Pitt9Hrd3bQJkxFQCQBIwG0cDLs0oGtIEUPtPXnY6EG8M1QXuLSQ1Oyo1PwuMaKxUwAzNqM0WenG1Ag2iyg5nBtZ2OFZznk2v4yn8c8HAGha7DknhIsl7Oh~B7Wb~mKeL18ha3aOGA3MWPgZnyCGbEJurNhcFo-WfwzFzG47o7CYEyg-7anTK~yJWIif5H4d~9cPAhZ9CwIV7Lb6oHIwsuK1gAnjejj7F8nJLSqRCQRzob-UiSsZpULw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

export default function IntroCaseStudyDetail() {
  // const caseStudyCardTheme = classes["primary-theme"];
  const caseStudyCardTheme = classes["red-theme"];

  return (
    <section className={classes["intro-case-study-detail"]}>
      <div
        className={classes["intro-case-study-detail-wrapper"]}
        style={{
          backgroundImage: `url(${DUMMY_IMG_SRC})`,
        }}
      >
        <div className="container">
          <div
            className={`${classes["intro-case-study-detail-card"]} ${caseStudyCardTheme}`}
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
              <p className={classes["intro-case-study-detail-body__heading"]}>
                Services
              </p>
              <ul className={classes["intro-case-study-detail-body-list"]}>
                <li className={classes["intro-case-study-detail-body-item"]}>
                  <div
                    className={classes["intro-case-study-detail-body-item-dot"]}
                  ></div>
                  <p>Content Marketing</p>
                </li>
                <li className={classes["intro-case-study-detail-body-item"]}>
                  <div
                    className={classes["intro-case-study-detail-body-item-dot"]}
                  ></div>
                  <p>Content Marketing</p>
                </li>
                <li className={classes["intro-case-study-detail-body-item"]}>
                  <div
                    className={classes["intro-case-study-detail-body-item-dot"]}
                  ></div>
                  <p>Content Marketing</p>
                </li>
                <li className={classes["intro-case-study-detail-body-item"]}>
                  <div
                    className={classes["intro-case-study-detail-body-item-dot"]}
                  ></div>
                  <p>Content Marketing</p>
                </li>
                <li className={classes["intro-case-study-detail-body-item"]}>
                  <div
                    className={classes["intro-case-study-detail-body-item-dot"]}
                  ></div>
                  <p>Content Marketing</p>
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
    </section>
  );
}
