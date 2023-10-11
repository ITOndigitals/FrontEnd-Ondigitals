import React from "react";
import classes from "./IntroCaseStudyDetail.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_IMG_SRC =
  "https://s3-alpha-sig.figma.com/img/755a/396d/96c81517448b7c9cd9de901b7015d23f?Expires=1698019200&Signature=LRljep1JyqaXOZRLFmXAjERaMzY1ojWYYAWTmG6CEXB12~huVoez-DrwQC5Ere~UfqLgSuROqIw8aLWJqsROVRdujdIZiZIwRExedNmGh6N6TjeRPiU~4945DeMZiScxOZSICU8aT4J1ITWqVpPFMMASXRdsOoA~NDx1OqlLdl~eNqqdITj4uVRsu8bcby39-Pz4aP6AyEjYtRd3bIKXOsIbpluI7CABk-FKaixhTXd3djClozPhK3SWSCAvysH7qYTEE~I6mhOn3PUyWpIUQBJEsnorq0UNP70nZ4jPS2n~EPB2q93WSiYY4KSWy-qPzZkHDeJHLdi1wmD5LD8RRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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
