import Link from "next/link";
import classes from "./ButtonNoBorder.module.scss";

const ButtonNoBorder = ({
  children,
  RightIcon,
  LeftIcon,
  href,
  textSize,
  className,
  color
}) => {
  return (
    <Link
      className={`${classes.btn} ${className} ${
        classes[`${textSize}`] ? classes[`${textSize}`] : ""
      }`}
      href={href}
    >
      {LeftIcon && LeftIcon}
      <p style={{color: color}}>{children}</p>
      {RightIcon && RightIcon}
    </Link>
  );
};

export default ButtonNoBorder;
