import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import classes from "./PartnerSection.module.scss";
import { Maven_Pro } from "next/font/google";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import { useEffect, useState } from "react";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import CouterNumber from "@/components/ui/CouterNumber/CouterNumber";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function PartnerSection({ data, NavButton }) {
  const { clients, pages } = data;
  console.log(data);
  const sectionHomepage = pages.nodes[0] || {};
  const {
    session3BellowText,
    session3SecondTitle,
    session3Title,
    session3GroupNumberClient,
  } = sectionHomepage.homePageInputContent || {};
  const itemImage = clients.nodes;
  const divImage = `${classes["homepagesectionpartner__content__image"]} ${classes["hvr-bounce-in"]}`;
  const [isOnMobile, setIsOnMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOnMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`${classes["homepagesectionpartner"]} partner-section`}>
      {!isOnMobile && <SectionHeader />}
      <div className="container">
        <p className={`${classes["homepagesectionpartner__title"]} appear`}>
          {session3Title}
        </p>
        <div
          className={`${classes["homepagesectionpartner__content"]} appear-slow`}
        >
          <div className={classes["homepagesectionpartner__content__colleft"]}>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <div
                className={`${classes["homepagesectionpartner__content--number"]} number-trusted`}
              >
                <CouterNumber
                  value={session3GroupNumberClient.number1}
                  classes={"partner-section"}
                  threshold={0.2}
                />
              </div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["homepagesectionpartner__content--text"]}
              >
                {session3GroupNumberClient.text1}
              </p>
            </div>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <div
                className={`${classes["homepagesectionpartner__content--number"]} number-successful`}
              >
                <CouterNumber
                  value={session3GroupNumberClient.number2}
                  classes={"partner-section"}
                  threshold={0.2}
                />
              </div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["homepagesectionpartner__content--text"]}
              >
                {session3GroupNumberClient.text2}
              </p>
            </div>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <div
                className={`${classes["homepagesectionpartner__content--number"]} number-monthly`}
              >
                <CouterNumber
                  value={session3GroupNumberClient.number3}
                  classes={"partner-section"}
                  threshold={0.2}
                />
              </div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["homepagesectionpartner__content--text"]}
              >
                {session3GroupNumberClient.text3}
              </p>
            </div>
          </div>
          <div
            className={classes["homepagesectionpartner__content__colrightmain"]}
          >
            <p
              className={
                classes["homepagesectionpartner__content__colright--text"]
              }
            >
              {session3SecondTitle}
            </p>
            <div
              className={
                classes["homepagesectionpartner__content__colrightimage"]
              }
            >
              {itemImage &&
                itemImage.map((item) => (
                  <div className={`${divImage} pulse-grow`}>
                    <Image
                      src={item.featuredImage.node?.sourceUrl}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={item.title}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div
          className={`${classes["homepagesectionpartner__below"]} appear-slow-more`}
        >
          <div className={`${classes["homepagesectionpartner__below__text"]} `}>
            {session3BellowText}
          </div>
          <ButtonNoBorder
            href="#"
            textSize="md"
            color="white"
            RightIcon={<FontAwesomeIcon icon={faArrowRight} color="white" />}
          >
            See our process
          </ButtonNoBorder>
          {/* <a className={classes["homepagesectionpartner__below__button"]}>
            See our process <FontAwesomeIcon icon={faArrowRight} />
          </a> */}
        </div>
      </div>
      {NavButton && NavButton}
    </section>
  );
}
