import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import classes from "./Tag.module.scss";

const Tag = ({ backgroundColor, name, href }) => {
  const { locale } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const hoverClasses = {
    "#3D1766": "colorseo",
    "#6F1AB6": "colorDigitalsContent",
    "#FF0032": "colorSocialOutreach",
    "#CD0404": "colorPaidPerfomance",
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoverClass = hoverClasses[backgroundColor] || "";

  return (
    <Link
      href={href}
      className={`${classes.tag} ${isHovered && classes[hoverClass]}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#3D1766",
      }}
    >
      {name}
    </Link>
  );
};

export default Tag;
