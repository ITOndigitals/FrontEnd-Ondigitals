import Image from "next/image";
import classes from "./Logo.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Logo = ({ isVisible, isDark, isOnMobile }) => {
  const { locale } = useRouter();
  if (isDark && !isOnMobile) {
    return (
      <Link
        onClick={() => {
          window.location.href = locale === "en" ? "/" : `/${locale}`;
        }}
        href={locale === "en" ? "/" : `/${locale}`}
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
        window.location.href = locale === "en" ? "/" : `/${locale}`;
      }}
      href={locale === "en" ? "/" : `/${locale}`}
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
