import React from "react";
import classes from "./IntroService.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function IntroService() {
  return (
    <section className={classes["intro-service"]}>
      <div className="container">
        <div className={classes["intro-service__content"]}>
          <div className={classes["intro-service__content__title"]}>
            <p>
              Did you know that there are more than 99,000 searches per second?
            </p>
          </div>
          <div
            style={{ fontFamily: MavenPro.style.fontFamily }}
            className={classes["intro-service__content__text"]}
          >
            <p>
              People in different demographics are spending more time on
              electronic devices. They search the web for products, services and
              business solutions that can solve their immediate needs.
            </p>
            <p>
              Are you leveraging the search results and social media? If not,
              you are missing out on valuable leads.
            </p>
            <p>
              On Digitals brings you the Full solution of Digital Marketing
              services tailored to your needs and help grow your enterprise.
            </p>
          </div>
        </div>
        <div className={`${classes["scroll-msg"]}`}>
          <div className={classes["scroll-msg__item"]}>
            <p>SCROLL DOWN</p>
            <div className={classes["scroll-msg__line"]}>
              <p></p>
            </div>
            <p style={{ fontFamily: MavenPro.style.fontFamily }}>
              to discover more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
