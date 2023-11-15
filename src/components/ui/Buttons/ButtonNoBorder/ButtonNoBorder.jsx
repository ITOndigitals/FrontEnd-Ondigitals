import Link from "next/link";
import classes from "./ButtonNoBorder.module.scss";

const ButtonNoBorder = ({
  children,
  RightIcon,
  LeftIcon,
  href,
  textSize,
  className,
  color,
  openInNewTab,
  relNofollow
}) => {
  return (
    <Link
      className={`${classes.btn} ${className} ${
        classes[`${textSize}`] ? classes[`${textSize}`] : ""
      }`}
      href={href}
      target={openInNewTab ? "_blank" : "_self"} // Mở tab mới nếu openInNewTab là true
      rel={relNofollow ? "nofollow" : null} // Thêm rel="nofollow" nếu relNofollow là true
      >{LeftIcon && LeftIcon}
      <p style={{ color: color }}>{children}</p>
      {RightIcon && RightIcon}
    </Link>
  );
};

export default ButtonNoBorder;
