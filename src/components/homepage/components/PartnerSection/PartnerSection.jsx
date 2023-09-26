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

export default function PartnerSection({ NavButton }) {
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
          YOUR PARTNER in digital growth
        </p>
        <div
          className={`${classes["homepagesectionpartner__content"]} appear-slow`}
        >
          <div className={classes["homepagesectionpartner__content__colleft"]}>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <div
                className={`${classes["homepagesectionpartner__content--number"]} number-trusted`}
              >
                <CouterNumber value={500} classes={"partner-section"} threshold={0.2} />
              </div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["homepagesectionpartner__content--text"]}
              >
                TRUSTED CLIENTS
              </p>
            </div>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <div
                className={`${classes["homepagesectionpartner__content--number"]} number-successful`}
              >
                <CouterNumber value={300} classes={"partner-section"} threshold={0.2} />
              </div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["homepagesectionpartner__content--text"]}
              >
                SUCCESSFUL CAMPAIGNS
              </p>
            </div>
            <div className={classes["homepagesectionpartner__content__item"]}>
              <div
                className={`${classes["homepagesectionpartner__content--number"]} number-monthly`}
              >
                <CouterNumber value={1000} classes={"partner-section"} threshold={0.2} />
              </div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["homepagesectionpartner__content--text"]}
              >
                MONTHLY VIEWS
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
              notable clients
            </p>
            <div
              className={
                classes["homepagesectionpartner__content__colrightimage"]
              }
            >
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/areus-atelier.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Atelier "
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/renault.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Renault "
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/tpcom.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo TPcoms"
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/ducati.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Ducati"
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/hantec.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo Hantec"
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/livingcare.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo LivingCare"
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/kundal.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo kundal"
                />
              </div>
              <div className={`${divImage} pulse-grow`}>
                <Image
                  src="/assets/images/SectionHomepage/passion-wine.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="Logo passion-wine"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${classes["homepagesectionpartner__below"]} appear-slow-more`}
        >
          <div className={`${classes["homepagesectionpartner__below__text"]} `}>
            We offer advanced digital solutions tailored to your needs.
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
