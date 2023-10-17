import React from "react";
import classes from "./SocialMediaKLD.module.scss";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function SocialMediaKLD() {
  return (
    <section className={classes["social-media"]}>
      <div className="container">
        <div className={classes["social-media__content"]}>
          <div className={classes["social-media__content__left"]}>
            <div
              style={{ fontFamily: MavenPro.style.fontFamily }}
              className={classes["social-media__content__left__text"]}
            >
              <p
                className={classes["social-media__content__left__text__title"]}
              >
                Social Media & PR Campaign
              </p>
              <div
                className={
                  classes["social-media__content__left__text__content"]
                }
              >
                On Digitals wants to leverage the social marketing to
                effectively increase brand awareness:
                <ul>
                  <li>Research and choose the right social platforms</li>
                  <li>PR campaign consultation</li>
                  <li>Content creation and social media posting </li>
                  <li>Analyze performance and reporting</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["social-media__content__right"]}>
            <div className={classes["social-media__content__right__image"]}>
              <Image
                src="https://s3-alpha-sig.figma.com/img/b491/bb88/f97c4e6ae69bb87995e63459113ef3d0?Expires=1698019200&Signature=STwAgoql83rbWsiJIsOP6ykn1IlKcTCWXb50EqPkDvLPU7LZmqnCyUq8a5RmlVVeeDHlSVWZ7VcIz3t2WR6IvNSP6HzkqexhiAIPlLTDh5TVj2xfwvLGFxf-fgGbBgJHNYA~TC6PJ7zo7-e~mugFrAGzYgxZU9khtPlSql~UA23xtor0-bWlaGvUvQqUQg5d~oaSOSx1NGa1w8egCorLCLRMUG8hi-oQXkVOldcgLycPcgDzPQPi-7fp8hTyz1WK07lreq4zTuwJMJgUiUfyu20EWSbcaZMC9dXO5xFzOexIZghe0wQLK~lXZvCL-RYs7PN0~V6aVWFAf-sLj9OcUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="text"
                fill
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div
              className={classes["social-media__content__right__imageperson"]}
            >
              <Image
                src="https://res.cloudinary.com/desbu2kll/image/upload/v1696929803/Frame_1751_1_mgx4lb.png"
                alt="text"
                fill
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
