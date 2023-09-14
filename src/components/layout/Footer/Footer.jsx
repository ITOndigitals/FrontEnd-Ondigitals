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
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function Footer() {
  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <div className={classes["footer__row"]}>
          <div className={classes["colum-1"]}>
            <div className={classes["image-logo-footer"]}>
              <Image
                src="/assets/images/ui/Logo Footer.png"
                fill
                alt="Logo Ondigitals"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div>
              <p
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["title__company__footer"]}
              >
                ON DIGITALS COMPANY LIMITED
              </p>
              <p>
                <span>Address:</span> 7th floor, 75 Ho Hao Hon, Co Giang Ward,
                District 1, Ho Chi Minh City
              </p>
              <p>
                <span>Hotline:</span> 0906648177
              </p>
              <p>
                <span>Work-time:</span> 9AM - 6PM (Monday to Friday)
              </p>
            </div>
          </div>
          <div className={classes["colum-2"]}>
            <p className={classes["colum__title"]}>SERVICES</p>
            <div className={classes["row__services"]}>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["colum-2__left"]}
              >
                <ul>
                  <li>
                    <a>SEO</a>
                  </li>
                  <li>
                    <a>PPC</a>
                  </li>
                  <li>
                    <a>Social Media</a>
                  </li>
                  <li>
                    <a>Website / E-commerce</a>
                  </li>
                  <li>
                    <a>Mobile App Development</a>
                  </li>
                  <li>
                    <a>Creative Design</a>
                  </li>
                </ul>
              </div>
              <div
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={classes["colum-2__right"]}
              >
                <ul>
                  <li>
                    <a>Content Marketing</a>
                  </li>
                  <li>
                    <a>Video Marketing</a>
                  </li>
                  <li>
                    <a>KOL Marketing</a>
                  </li>
                  <li>
                    <a>OOH Advertising</a>
                  </li>
                  <li>
                    <a>TVC Advertising</a>
                  </li>
                  <li>
                    <a>Telemarketing</a>
                  </li>
                  <li>
                    <a>Email Marketing</a>
                  </li>
                  <li>
                    <a>Event Marketing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["colum-3"]}>
            <div>
              <p className={classes["colum__title"]}>EXPLORE</p>
              <ul style={{ fontFamily: MavenPro.style.fontFamily }}>
                <li>
                  <a>About On Digitals</a>
                </li>
                <li>
                  <a>Our Policy</a>
                </li>
                <li>
                  <a>Case Study</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["colum-4"]}>
            <p className={classes["colum__title"]}>FOLLOW US</p>
            <div className={classes["icon__homepage--social"]}>
              <a>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className={classes["icon--Zalo"]}>Zalo</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
