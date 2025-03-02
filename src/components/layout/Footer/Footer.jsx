import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.scss";
import { Maven_Pro } from "next/font/google";
import {
  IconZalo,
  LogoFooter,
} from "@/components/ui/Icons/ListIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import {
  languagePathsIndustries,
  languagePathsService,
} from "../../../../utils/languageSlug";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const iconFont = {
  facebook: faFacebook,
  instagram: faInstagram,
  linkedinIn: faLinkedinIn,
};
export default function Footer({ data }) {
  const { locale } = useRouter();
  if (!data) {
    return <div>Loading.....</div>;
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { footerods, content } = data[0];
  const { title, columExplore, columFollowUs, columService, columIndustries } =
    footerods;

  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["footer__row"]}>
          <div className={classes["colum-1"]}>
            <div className={classes["image-logo-footer"]}>
              <Link
                onClick={() => {
                  window.location.href = "/";
                }}
                href="/"
              >
                <LogoFooter width={160} height={100} color={"#FFF"} />
              </Link>
            </div>
            <div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["title__company__footer"]}
              >
                {title && title}
              </p>
              {content && parse(content)}
            </div>
            <div className={classes["colum-1__map-wrapper-map-item"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6402117870234!2d106.68875007460305!3d10.762187159457106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3528168587%3A0xb88ddea7383b07dc!2sDigital%20Marketing%20Agency%20-%20On%20Digitals!5e0!3m2!1svi!2s!4v1694778233203!5m2!1svi!2s"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className={classes["colum-2"]}>
            <Link
              style={{
                textDecoration: "none",
              }}
              href={languagePathsService[locale]}
            >
              <p className={classes["colum__title"]}>
                {columService?.titleServices}
              </p>
            </Link>
            <div className={classes["row__services"]}>
              {columService?.services &&
                columService.services.map((item, index) => (
                  <div
                    key={index}
                    style={{ fontFamily: MavenPro.style.fontFamily }}
                    className={classes["row__services__detail"]}
                  >
                    <Link
                      href={item?.linkservice || "/"}
                      className={classes["row__services__detail__title"]}
                    >
                      {item?.title}
                    </Link>
                    {item.listServices && parse(item.listServices)}
                  </div>
                ))}
            </div>
          </div>
          <div className={classes["colum-3"]}>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                }}
                href={languagePathsIndustries[locale]}
              >
                <p className={classes["colum__title"]}>
                  {columIndustries?.titleIndustries}
                </p>
              </Link>
              {columIndustries.listIndustries &&
                parse(columIndustries.listIndustries)}
            </div>
          </div>
          <div className={classes["colum-4"]}>
            <div>
              <p className={classes["colum__title"]}>{columExplore?.title}</p>
              {columExplore.listExplore && parse(columExplore.listExplore)}
            </div>
            <p className={classes["colum-title-media"]}>
              {columFollowUs?.title}
            </p>
            <div className={classes["icon__homepage--social"]}>
              {columFollowUs.listIcon &&
                columFollowUs.listIcon.map((item, index) => (
                  <Link href={item.linkIcon} key={index}>
                    <FontAwesomeIcon
                      icon={iconFont[item?.nameIconFortawesome]}
                    />
                  </Link>
                ))}
              <Link href={columFollowUs?.linkZalo}>
                <IconZalo width={52} height={18} color={"#FFF"} />
              </Link>
            </div>
            <div style={{ marginTop: "10px" }}>
              {/* {columFollowUs?.inputDmca && parse(columFollowUs.inputDmca)} */}
              <Link
                href="https://www.dmca.com/Protection/Status.aspx?ID=6950ddd2-dee7-4269-bb55-98e4f776a325&refurl=https://ondigitals.com/"
                title="DMCA.com Protection Status"
                className="dmca-badge"
                target="_blank"
                rel="nofollow"
              >
                <Image
                  src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=244fa5c9-fa77-485b-9407-b294e1446b88"
                  alt="DMCA.com Protection Status"
                  width={122}
                  height={25}
                />
              </Link>
              <Script
                strategy="lazyOnload"
                src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes["btn-contact"]}>
        <Link href={`/${locale}/contact`}>Contact Us</Link>
      </div>
      <button
        className={classes["back-to-top"]}
        onClick={scrollToTop}
        title="Back to Top"
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 48.000000 48.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M145 310 c-71 -71 -87 -92 -77 -102 10 -10 29 4 92 67 l80 80 80 -80
                  c63 -63 82 -77 92 -67 10 10 -6 31 -77 102 -49 50 -92 90 -95 90 -3 0 -46 -40
                  -95 -90z"
            />
            <path
              d="M145 190 c-71 -71 -87 -92 -77 -102 10 -10 29 4 92 67 l80 80 80 -80
                c63 -63 82 -77 92 -67 10 10 -6 31 -77 102 -49 50 -92 90 -95 90 -3 0 -46 -40
                -95 -90z"
            />
          </g>
        </svg>
      </button>
    </footer>
  );
}
