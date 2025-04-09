import React, { lazy, Suspense, useEffect, useState } from "react";
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
import dynamic from "next/dynamic";

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
  const LazyMapChart = lazy(() => import("../../../../utils/MapChart"));
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
            {isActive && (
              <Suspense fallback={<div>Loading map...</div>}>
                {!isMobile && <LazyMapChart />}
              </Suspense>
            )}
          </div>
        </div>
        <div
          className={`container--big ${classes["menu-list-wrapper-inner"]}`}
          style={{ overflowY: "auto" }}
        >
          <ul
            className={`${classes["menu-list"]}`}
            style={{ transitionDelay: isActive ? "0.8s" : "0.2s" }}
          >
            {dataMenu &&
              dataMenu.map((item, index) => (
                <li
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
                    <p
                      className={`${classes["menu-list-item__circle"]} ${
                        classes[`circle-${index}`]
                      }`}
                    ></p>
                  </Link>
                </li>
              ))}
          </ul>
          <div>
           

            <div
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
                    {item.icon}
                  </Link>
                ))}
            </div>
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
