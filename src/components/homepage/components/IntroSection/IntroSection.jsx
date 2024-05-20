import Image from "next/image";
import classes from "./IntroSection.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const IntroSection = ({ data }) => {
  const { pages } = data;
  const {
    introSectionTextDescription,
    introSectionTextHello,
    introSectionTextScrollDown1,
    introSectionTextScrollDown2,
    introSectionRightImage,
    introSectionLeftImage,
  } = pages.nodes[0].homePageInputContent || {};
  return (
    <section className={`${classes.intro} intro-section`}>
      <div className="container relative">
        <h1 style={{ display: "none" }}>ONDIGITALS</h1>
        <div className={classes["intro-layout"]}>
          <div className={classes["intro-layout-item"]}>
            <p className={`${classes["intro-greeting"]} `}>
              {introSectionTextHello}
            </p>
            <div className={`${classes["intro-brand-img-container"]}`}>
              <Image
                className={classes["intro-brand-img"]}
                fill
                priority="true"
                src={introSectionLeftImage?.sourceUrl}
                alt={introSectionLeftImage?.altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                loading="eager"
              />
            </div>
            <p
              className={`${classes["intro-description"]} `}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              {introSectionTextDescription}
            </p>
          </div>
          <div className={classes["intro-layout-item"]}>
            <div className={`${classes["intro-layout-item-video"]} `}>
              <video
                width="100%"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              >
                <source
                  src="/assets/video/ANIMATION-HEVC-2.mov"
                  type='./video/mp4; codecs="hvc1"'
                />
                <source
                  src="/assets/video/Animation-WEBM.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes["scroll-msg"]} container--big`}>
        <div className={classes["scroll-msg__item"]}>
          <p>{introSectionTextScrollDown1}</p>
          <div className={classes["scroll-msg__line"]}>
            <p></p>
          </div>
          <p style={{ fontFamily: MavenPro.style.fontFamily }}>
            {introSectionTextScrollDown2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
