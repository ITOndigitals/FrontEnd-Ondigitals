import Image from "next/image";
import React from "react";
import classes from "./IntroducingOnDigitals.module.scss";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function IntroducingOnDigitals() {
  return (
    <section className={classes["introducing-ondigitals"]}>
      <div className="container">
        <div className={classes["main-content"]}>
          <div className={classes["main-content__text"]}>
            <p className={classes["main-content__text__title"]}>Who we are</p>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["main-content__text__detail"]}
            >
              <p>
                Introducing <Link href={"#"}>On Digitals</Link>, your gateway to
                the future of digital marketing!
              </p>
              <br />
              <p>
                As a dynamic digital marketing agency specializing in
                comprehensive digital solutions,{" "}
                <Link href={"#"}>On Digitals</Link> harnesses the power of
                cutting-edge technology and creative innovation to elevate your
                online presence.
              </p>
              <br />
              <p>
                With a team of dedicated experts at the forefront of the digital
                landscape, they craft tailored strategies that not only drive
                results but also tell a compelling story about your brand.
              </p>
              <br />
              <p>
                From SEO mastery to captivating content creation and everything
                in between, On Digitals is your trusted partner for navigating
                the ever-evolving digital realm. Discover limitless
                possibilities and unlock your brand's true potential with On
                Digitals today.
              </p>
            </div>
          </div>
          <div className={classes["main-content__image"]}>
            <Image
              src="/assets/images/PageAboutUs/graphic image.png"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="On Digitals"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
