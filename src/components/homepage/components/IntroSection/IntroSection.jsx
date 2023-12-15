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
  } = pages.nodes[0].homePageInputContent || {};
  return (
    <section className={`${classes.intro} intro-section`}>
      <div className="container relative">
        <h1 style={{display:"none"}}>ONDIGITALS</h1>
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
                src="https://api.ondigitals.com/wp-content/uploads/2023/09/ondigitals.webp"
                alt="Ondigitals"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <div className={`${classes["intro-layout-item-img"]} appear-slow`}>
              <Image
                src="https://api.ondigitals.com/wp-content/uploads/2023/09/intro-bg.webp"
                fill
                alt="Ondigitals"
                placeholder="blur"
                blurDataURL="https://api.ondigitals.com/wp-content/uploads/2023/09/intro-bg.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
