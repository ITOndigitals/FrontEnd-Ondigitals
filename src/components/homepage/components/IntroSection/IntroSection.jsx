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
            <p className={`${classes["intro-greeting"]} appear`}>
              {introSectionTextHello}
            </p>
            <div
              className={`${classes["intro-brand-img-container"]} appear-slow`}
            >
              <Image
                className={classes["intro-brand-img"]}
                fill
                src={introSectionLeftImage?.sourceUrl}
                alt={introSectionLeftImage?.altText}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <p
              className={`${classes["intro-description"]} appear-slow-more`}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              {introSectionTextDescription}
            </p>
          </div>
          <div className={classes["intro-layout-item"]}>
            <div
              className={`${classes["intro-layout-item-video"]} appear-slow`}
            >
              <video width="100%" autoPlay loop muted playsInline>
                <source
                  src="https://api.ondigitals.com/wp-content/uploads/2024/01/Homepage_animation_purple.mp4"
                  type="video/mp4"
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
