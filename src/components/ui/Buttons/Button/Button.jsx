import classes from "./Button.module.scss";
import Link from "next/link";

export default function Button({
  children,
  RightIcon,
  LeftIcon,
  href,
  textSize,
  className,
}) {
  if (href) {
    return (
      <Link
        href={href}
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
      className={`${
        className != null ? classes[`${className}`] : classes["button"]
      }`}
    >
      {LeftIcon && LeftIcon}
      <p>{children}</p>
      {RightIcon && RightIcon}
    </button>
  );
}
