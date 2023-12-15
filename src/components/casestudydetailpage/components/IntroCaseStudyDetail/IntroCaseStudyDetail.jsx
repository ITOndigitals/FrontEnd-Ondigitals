import React from "react";
import classes from "./IntroCaseStudyDetail.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_IMG_SRC =
  "https://s3-alpha-sig.figma.com/img/1b43/abeb/43a81b5b45fad391bd8d77acdefdd273?Expires=1701648000&Signature=irVL5Y8nMKXOGoxylcQEzCv6UbeqGHucrsR0WknRfuMC~cOMhs8GLrdAVhPJuTrDHIRBmXLpTTUGdhcWt237rpooTfbeKv8pU7V5QN8RrUnjXDTzdR3ZW7X5ZRWwYwLIEEv3FHNloWmcD4FBV8RYnmRjnX~TjuuUVeB2tcpuvyhanxj5XyL6sdzIaOQvRVZ9LBVkxvpVcjGQ9dmkzVsZYl3x~c~OI60K6CSUp8w-WJ1bRk0sGQAU-eeoB6LrFCbn0QfPmuY~E5qVNtsxbWb93ZsA3NgDyNwPYn52F0RorlLYJoHTUWDl6A4TVhJrf3qmxm6lfJEbwtCwePBkEPz4kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

// const DUMMY_IMG_SRC =
//   "https://s3-alpha-sig.figma.com/img/e3b4/d923/927eac33fa99e0bb296867fcbec62a9e?Expires=1698019200&Signature=oDq-qTNBobrp~A2Q0G0NpjxY0ydHuytPL8M9I5zyBUB1CVyU67OgKxculgieSnKSnwGkhPpogAoo1mqcRfcRbrfM6Ytwv9Pitt9Hrd3bQJkxFQCQBIwG0cDLs0oGtIEUPtPXnY6EG8M1QXuLSQ1Oyo1PwuMaKxUwAzNqM0WenG1Ag2iyg5nBtZ2OFZznk2v4yn8c8HAGha7DknhIsl7Oh~B7Wb~mKeL18ha3aOGA3MWPgZnyCGbEJurNhcFo-WfwzFzG47o7CYEyg-7anTK~yJWIif5H4d~9cPAhZ9CwIV7Lb6oHIwsuK1gAnjejj7F8nJLSqRCQRzob-UiSsZpULw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const cardBackgroundColor = "#3D1766"; // Màu nền của card
const cardHeaderColor = "#6F1AB6"; // Màu nền header của card

export default function IntroCaseStudyDetail() {
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
            className={classes["intro-case-study-detail-card"]}
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <div
              className={`${classes["intro-case-study-detail-spacer"]}`}
            ></div>
            <div
              className={classes["intro-case-study-detail-heading"]}
              style={{ backgroundColor: cardHeaderColor }}
            >
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
