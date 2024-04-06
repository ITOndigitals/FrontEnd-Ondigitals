import Image from "next/image";
import classes from "./CaseStudyItem.module.scss";
import Link from "next/link";

import { Maven_Pro } from "next/font/google";
import ExploreButton from "@/components/ui/Buttons/ExploreButton/ExploreButton";
import { useState } from "react";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

const CaseStudyItem = ({ item, index }) => {
  const { caseStudyHomepage, featuredImage, content, slug, categories } = item;
  const {
    caseStudyTextButtonItem,
    caseStudyTextButton,
    logoImage,
    backgroundColor,
  } = caseStudyHomepage;
  const itemClasses = `${classes.item} ${classes[`item-${index + 1}`]}`;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={itemClasses}
    >
      {/* <Link href="#"> */}
      <div className={classes["item-image-wrapper"]}>
        <div className={classes["stroke-wrapper"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="201"
            height="200"
            viewBox="0 0 201 200"
            fill="none"
          >
            <path
              d="M45.2937 22.8638C45.2936 23.8477 44.8322 24.8316 44.0082 25.4876C36.2297 31.391 29.44 38.4095 23.8368 46.412C22.7821 47.8878 20.7386 48.2486 19.2554 47.2318C17.7723 46.2151 17.3768 44.1489 18.4315 42.673C24.4302 34.113 31.6813 26.6026 40.0201 20.2728C41.4704 19.1905 43.5468 19.4529 44.6345 20.896C45.0629 21.4863 45.2937 22.1751 45.2937 22.8638Z"
              fill="white"
              stroke="white"
              strokeWidth="0.15"
              strokeMiterlimit="10"
            />
            <path
              d="M200.499 99.507C200.499 154.377 155.64 199.013 100.499 199.013C45.3579 199.012 0.500363 154.375 0.500809 99.5054C0.500928 84.8779 3.59924 70.808 9.72982 57.6892C10.4879 56.0494 12.4655 55.3278 14.1134 56.0822C15.7614 56.8365 16.4865 58.8044 15.7284 60.4442C9.99337 72.7103 7.09282 85.8619 7.09271 99.5054C7.0923 150.767 49.0165 192.453 100.499 192.453C151.982 192.454 193.907 150.736 193.907 99.507C193.908 48.2779 151.984 6.55975 100.501 6.55933C85.7679 6.55921 71.6941 9.8716 58.6421 16.3981C57.0271 17.218 55.0495 16.562 54.2255 14.9222C53.4015 13.2823 54.0608 11.3473 55.6758 10.5274C69.6507 3.54172 84.7462 -0.000215254 100.501 -8.71484e-05C155.642 0.00036122 200.5 44.6375 200.499 99.507Z"
              fill="white"
              stroke="white"
              strokeWidth="0.15"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
        <div className={classes["item-image-wrapper-sm-circle"]}></div>
        <div className={classes["item-image-wrapper-main"]}>
          {!isHovered ? (
            <Image
              src={logoImage?.sourceUrl}
              fill
              style={{ objectFit: "cover", backgroundColor: backgroundColor }}
              alt={logoImage?.altText}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          ) : (
            <Image
              src={featuredImage?.node.sourceUrl}
              fill
              style={{ objectFit: "cover" }}
              alt={featuredImage?.node.altText}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          )}
        </div>
      </div>
      <div className={classes["item-description"]}>
        <div
          className={classes["item-description-wrapper"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          <ul>
            {categories.nodes.map((item, index) => (
              <li key={index}>
                <Link href={item.slug}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href={slug} className={classes["item-description__explore"]}>
          <ExploreButton>{caseStudyTextButtonItem}</ExploreButton>
        </Link>
      </div>
      {/* </Link> */}
    </li>
  );
};

export default CaseStudyItem;
