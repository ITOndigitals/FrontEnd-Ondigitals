import Image from "next/image";
import classes from "./Logo.module.scss";
import Link from "next/link";

const Logo = ({ isVisible, isDark, isOnMobile }) => {
  if (isDark && !isOnMobile) {
    return (
      <Link
        onClick={() => {
          window.location.href = "/";
        }}
        href="/"
        className={classes["logo-container"]}
        style={{
          display: isVisible ? "block" : "none",
        }}
      >
        <Image
          src="/assets/images/ui/Logo-dark.png"
          fill
          alt="logo"
          placeholder="blur"
          blurDataURL={"/assets/images/ui/Logo-dark.png"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    );
  }
  return (
    <Link
      onClick={() => {
        window.location.href = "/";
      }}
      href="/"
      className={classes["logo-container"]}
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <Image
        src="/assets/images/ui/Logo.png"
        fill
        alt="logo"
        placeholder="blur"
        blurDataURL={"/assets/images/ui/Logo.png"}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

export default Logo;
