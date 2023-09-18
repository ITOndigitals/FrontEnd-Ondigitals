import classes from "./ContactInfo.module.scss";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import {
  FacebookIcon,
  LinkedIcon,
  PinterestIcon,
  XTwitterIcon,
} from "@/components/ui/Icons/ListIcon";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const socialsSharingData = [
  {
    href: "#",
    icon: <FacebookIcon width="24" height="24" color="#3D1766" />,
  },
  {
    href: "#",
    icon: <LinkedIcon width="24" height="24" color="#3D1766" />,
  },
  {
    href: "#",
    icon: <XTwitterIcon width="24" height="24" color="#3D1766" />,
  },
  {
    href: "#",
    icon: <PinterestIcon width="24" height="24" color="#3D1766" />,
  },
];

export default function ContactInfo() {
  return (
    <section className={`contact-infor ${classes["contact-section"]}`}>
      <div className="container">
        <div className={classes["contact-infor"]}>
          <div className={classes["contact-infor__content"]}>
            <div className={classes["contact-infor__content-wrapper"]}>
              <div className={classes["contact-infor__content-heading"]}>
                <p>We’re here</p>
                <p>to help</p>
              </div>
              <ul className={classes["contact-infor__content-infor"]}>
                <li className={classes["contact-infor__content-infor-item"]}>
                  <div className={classes.circle} />
                  <div
                    className={
                      classes["contact-infor__content-infor-item-wrapper"]
                    }
                  >
                    <div
                      className={
                        classes["contact-infor__content-infor-item__heading"]
                      }
                    >
                      <p>Address:</p>
                    </div>
                    <p
                      className={
                        classes["contact-infor__content-infor-item__content"]
                      }
                      style={{ fontFamily: MavenPro.style.fontFamily }}
                    >
                      7th floor, 75 Ho Hao Hon, Co Giang Ward, District 1, Ho
                      Chi Minh City, Vietnam
                    </p>
                  </div>
                </li>
                <li className={classes["contact-infor__content-infor-item"]}>
                  <div className={classes.circle} />
                  <div
                    className={
                      classes["contact-infor__content-infor-item-wrapper"]
                    }
                  >
                    <div
                      className={
                        classes["contact-infor__content-infor-item__heading"]
                      }
                    >
                      <p>Hotline:</p>
                    </div>
                    <Link
                      className={
                        classes["contact-infor__content-infor-item__content"]
                      }
                      href="tel:+84906648177"
                      style={{ fontFamily: MavenPro.style.fontFamily }}
                    >
                      (+84)906648177
                    </Link>
                  </div>
                </li>
                <li className={classes["contact-infor__content-infor-item"]}>
                  <div className={classes.circle} />
                  <div
                    className={
                      classes["contact-infor__content-infor-item-wrapper"]
                    }
                  >
                    <div
                      className={
                        classes["contact-infor__content-infor-item__heading"]
                      }
                    >
                      <p>Work-time:</p>
                    </div>
                    <div
                      className={
                        classes["contact-infor__content-infor-item__content"]
                      }
                      style={{ fontFamily: MavenPro.style.fontFamily }}
                    >
                      9AM - 6PM (Monday to Friday)
                    </div>
                  </div>
                </li>
              </ul>
              <div className={classes["contact-infor__content-social"]}>
                <p className={classes["contact-infor__content-social-heading"]}>
                  Connect with us
                </p>
                <ul className={classes["contact-infor__content-social-list"]}>
                  {socialsSharingData.map((item, index) => {
                    return (
                      <li>
                        <Link href={item.href}>{item.icon}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className={classes["contact-infor__map-wrapper"]}>
            <ButtonNoBorder
              href="#"
              textSize="md"
              RightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="#131114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="#131114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              FIND DIRECTION
            </ButtonNoBorder>
            <div className={classes["contact-infor__map-wrapper-map-item"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6402117870234!2d106.68875007460305!3d10.762187159457106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3528168587%3A0xb88ddea7383b07dc!2sDigital%20Marketing%20Agency%20-%20On%20Digitals!5e0!3m2!1svi!2s!4v1694778233203!5m2!1svi!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
