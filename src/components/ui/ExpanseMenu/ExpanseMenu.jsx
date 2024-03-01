import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./ExpanseMenu.module.scss";
import Image from "next/image";
import {
  ClutchIcon,
  DownNavIcon,
  FacebookIcon,
  IconZalo,
  InstagramIcon,
  LinkedIcon,
} from "../Icons/ListIcon";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";
import { slugServicesMenuMobile } from "../../../../utils/languageSlug";

const parse = require("html-react-parser");
const listIconSocial = [
  {
    id: 1,
    slug: "https://www.facebook.com/on.digitals.agency",
    icon: <FacebookIcon width={24} height={24} color={"#fff"} />,
  },
  {
    id: 2,
    slug: "https://www.linkedin.com/company/on-digitals",
    icon: <LinkedIcon width={24} height={24} color={"#fff"} />,
  },
  {
    id: 3,
    slug: "https://www.instagram.com/ondigitals",
    icon: <InstagramIcon width={24} height={24} color={"#fff"} />,
  },
  {
    id: 4,
    slug: "https://zalo.me/4436409039049370507",
    icon: <IconZalo width={51} height={24} color={"#fff"} />,
  },
  {
    id: 5,
    slug: "https://clutch.co/profile/digitals-0#review-1252680",
    icon: <ClutchIcon width={24} height={24} color={"#fff"} />,
  },
];

const ExpanseMenu = ({ options, isActive, menu }) => {
  if (!menu) {
    return null;
  }
  const [isMobile, setIsMobile] = useState(false);
  const { locale } = useRouter();
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const delays = options.map((item) => item.delay);
  const delayOptions = isActive
    ? [...delays]
    : [...delays].map((item) => item - 0.05).reverse();
  const { dataMenu, updatedData } = menu;
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsMobile(width <= 1025);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`${classes.wrapper} ${isActive ? classes.active : ""}`}
      style={{
        transitionDelay: "0.6s",
      }}
    >
      <div className={classes["menu-list-wrapper"]}>
        <div className={classes["menu-list-wrapper__map"]}>
          <div className={classes["menu-list-wrapper__image"]}>
            <Image
              fill
              src="https://api.ondigitals.com/wp-content/uploads/2023/11/GLOBE.png"
              alt="Ondigitals"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
          <div className={classes["menu-list-wrapper__head-line"]}>
            {updatedData?.header?.headLineMenu &&
              parse(updatedData?.header?.headLineMenu)}
          </div>
          <p className={classes["menu-list-wrapper__japan"]}>Japan </p>
          <p className={classes["menu-list-wrapper__china"]}>China </p>
          <p className={classes["menu-list-wrapper__thailand"]}>Thailand </p>
          <p className={classes["menu-list-wrapper__taiwan"]}>Taiwan </p>
          <p className={classes["menu-list-wrapper__vietnam"]}>Vietnam </p>
          <p className={classes["menu-list-wrapper__philippines"]}>
            Philippines
          </p>
          
          <p className={classes["menu-list-wrapper__malaysia"]}>Malaysia </p>
          <p className={classes["menu-list-wrapper__singapore"]}>Singapore </p>
          <p className={classes["menu-list-wrapper__indonesia"]}>Indonesia </p>
          <p className={classes["menu-list-wrapper__australia"]}>Australia </p>
        </div>

        <div
          className={`container--big ${classes["menu-list-wrapper-inner"]}`}
          style={{ overflowY: "auto" }}
        >
          {isMobile ? (
            <ul
              className={`${classes["menu-list"]}`}
              style={{ transitionDelay: isActive ? "0.8s" : "0.2s" }}
            >
              {dataMenu &&
                dataMenu.map((item, index) => (
                  <li
                    onClick={() => {
                      if (index === 1) {
                        setDropdownIsOpen((old) => !old);
                      }
                    }}
                    className={`${classes["menu-list-item"]} ${
                      dropdownIsOpen ? classes["menu-list-item__services"] : ""
                    }`}
                    key={item.id}
                  >
                    <Link
                      onClick={(e) => {
                        if (index === 1) {
                          e.preventDefault();
                        }
                      }}
                      href={item?.path || "/"}
                      className={classes["menu-list-item__link"]}
                    >
                      <span>{item.label}</span>
                      {index === 1 ? (
                        dropdownIsOpen ? (
                          <p
                            className={`${classes["menu-list-item__circle"]} ${
                              classes[`circle-${index}`]
                            }`}
                          ></p>
                        ) : (
                          <DownNavIcon width={30} height={30} color="#fff" />
                        )
                      ) : (
                        <p
                          className={`${classes["menu-list-item__circle"]} ${
                            classes[`circle-${index}`]
                          }`}
                        ></p>
                      )}
                    </Link>
                    <ul
                      style={{
                        transition: "max-height 0.3s ease-in-out",
                      }}
                    >
                      {item?.listServices &&
                        [
                          slugServicesMenuMobile[locale],
                          ...item?.listServices,
                        ].map((item) => (
                          <li
                            key={item?.databaseId}
                            className={classes["menu-list-item__link__child"]}
                          >
                            <Link href={item?.slug || "/"}>
                              {item.serviceHomepage?.name || item?.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          ) : (
            <ul
              className={`${classes["menu-list"]}`}
              style={{ transitionDelay: isActive ? "0.8s" : "0.2s" }}
            >
              {dataMenu &&
                dataMenu.map((item, index) => (
                  <li
                    onMouseEnter={() => {
                      {
                        index === 1 && setDropdownIsOpen(true);
                      }
                    }}
                    onMouseLeave={() => {
                      {
                        index === 1 && setDropdownIsOpen(false);
                      }
                    }}
                    className={`${classes["menu-list-item"]} ${
                      dropdownIsOpen ? classes["menu-list-item__services"] : ""
                    }`}
                    key={item.id}
                  >
                    <Link
                      href={item?.path || "/"}
                      className={classes["menu-list-item__link"]}
                    >
                      <span>{item.label}</span>
                      {index === 1 ? (
                        dropdownIsOpen ? (
                          <p
                            className={`${classes["menu-list-item__circle"]} ${
                              classes[`circle-${index}`]
                            }`}
                          ></p>
                        ) : (
                          <DownNavIcon width={30} height={30} color="#fff" />
                        )
                      ) : (
                        <p
                          className={`${classes["menu-list-item__circle"]} ${
                            classes[`circle-${index}`]
                          }`}
                        ></p>
                      )}
                    </Link>
                    <ul>
                      {item?.listServices &&
                        item?.listServices.map((item) => (
                          <li
                            key={item?.databaseId}
                            className={classes["menu-list-item__link__child"]}
                          >
                            <Link href={item?.slug || "/"}>
                              {item.serviceHomepage?.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
            </ul>
          )}

          <div>
            <a
              href="mailto:contact@ondigitals.com"
              className={classes["menu-list__emailContact"]}
            >
              contact@ondigitals.com
            </a>

            <ul
              className={classes["menu-social"]}
              style={{ transitionDelay: isActive ? "0.8s" : "0.2s" }}
            >
              {listIconSocial &&
                listIconSocial.map((item) => (
                  <Link
                    target="_blank"
                    rel="nofollow"
                    className={classes["menu-social__item"]}
                    key={item.id}
                    href={item?.slug || "/"}
                  >
                    <li>{item.icon}</li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {options.map((item, index) => (
        <div
          key={index}
          className={classes["overlay-item"]}
          style={{
            backgroundColor: item.backgroundColor,
            transitionDelay: `${delayOptions[index]}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ExpanseMenu;
