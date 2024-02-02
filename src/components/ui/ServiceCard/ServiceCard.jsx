import React, { useEffect, useState } from "react";
import classes from "./ServiceCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceCard({ data }) {
  if (!data) {
    return null;
  }
  const { serviceHomepage, slug, featuredImage } = data;
  const { altText, sourceUrl } = featuredImage?.node;
  const [isMobile, setIsMobile] = useState(false);

  const [isHover, setIsHover] = useState(false);
  const boxStyle = {
    backgroundColor: isHover ? serviceHomepage?.secondaryColor : "#fff",
  };
  const boxStyleMobile = {
    backgroundColor: serviceHomepage?.secondaryColor
      ? serviceHomepage?.secondaryColor
      : "#fff",
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setIsMobile(width <= 1200);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Link
      href={`${slug}`}
      style={isMobile ? boxStyleMobile : boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes["service-card"]}
    >
      <div className={classes["service-card__content"]}>
        <div className={classes["service-card__content__title"]}>
          <p>{serviceHomepage?.name}</p>
        </div>
        <div className={classes["service-card__content__image"]}>
          <div className={classes["service-card__content__image__main"]}>
            <Image
              fill
              src={sourceUrl && sourceUrl}
              alt={altText && altText}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
