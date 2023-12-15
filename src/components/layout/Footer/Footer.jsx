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
import { IconZalo, LogoFooter } from "@/components/ui/Icons/ListIcon";
import Link from "next/link";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const iconFont = {
  facebook: faFacebook,
  instagram: faInstagram,
  linkedinIn: faLinkedinIn,
};
export default function Footer({ data }) {
  if(!data){
    return <div>Loading.....</div>
  }
  const { footerods, content } = data[0];
  const { title, columExplore, columFollowUs, columService } = footerods;

  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["footer__row"]}>
          <div className={classes["colum-1"]}>
            <div className={classes["image-logo-footer"]}>
              <Link href="/">
                <LogoFooter width={240} height={100} color={"#FFF"} />
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
          </div>
          <div className={classes["colum-2"]}>
            <p className={classes["colum__title"]}>{columService?.title}</p>
            <div className={classes["row__services"]}>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["colum-2__left"]}
              >
                {columService.listServiceLeft &&
                  parse(columService.listServiceLeft)}
              </div>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["colum-2__right"]}
              >
                {columService.listServiceRight &&
                  parse(columService.listServiceRight)}
              </div>
            </div>
          </div>
          <div className={classes["colum-3"]}>
            <div>
              <p className={classes["colum__title"]}>{columExplore?.title}</p>
              {columExplore.listExplore && parse(columExplore.listExplore)}
            </div>
          </div>
          <div className={classes["colum-4"]}>
            <p className={classes["colum__title"]}>{columFollowUs?.title}</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
