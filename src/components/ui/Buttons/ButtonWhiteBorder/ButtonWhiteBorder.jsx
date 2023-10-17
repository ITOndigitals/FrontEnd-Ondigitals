import Link from "next/link";
import classes from "./ButtonWhiteBorder.module.scss";

const ButtonWhiteBorder = ({
  children,
  RightIcon,
  LeftIcon,
  href,
  className,
  isInline = false,
}) => {
  if (href) {
    return (
      <Link
        href={href}
        style={{display: isInline ? "inline-flex" : "flex"}}
        className={`${
          className != null ? classes[`${className}`] : classes["button"]
        }`}
      >
        {LeftIcon && LeftIcon}
        <p style={{paddingTop: "2px"}}>{children}</p>
        {RightIcon && RightIcon}
      </Link>
    );
  }
  return (
    <button
      type="submit"
      style={{ display: isInline ? "inline-flex" : "flex" }}
      className={`${
        className != null ? classes[`${className}`] : classes["button"]
      }`}
    >
      {LeftIcon && LeftIcon}
      <p>{children}</p>
      {RightIcon && RightIcon}
    </button>
  );;
};

export default ButtonWhiteBorder;