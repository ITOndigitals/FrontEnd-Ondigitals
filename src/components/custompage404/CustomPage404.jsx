import { useBoundStore } from "@/store/useBoundStore";
import React, { useEffect } from "react";
import classes from "./CustomPage404.module.scss";
import Image from "next/image";
import Button from "../ui/Buttons/Button/Button";
import { ArrowRight } from "../ui/Icons/ListIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  translateButtonPage404,
  translateMetaTitlePage404,
  translateTextPage404,
  translateTitlePage404,
} from "../../../utils/languageSlug";
import Head from "next/head";

export default function CustomPage404() {
  const { locale } = useRouter();
  const setToLight = useBoundStore((state) => state.setToLight);
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setBottomNavIsShown = useBoundStore(
    (state) => state.setBottomNavIsShown
  );
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );
  const setChangeStickyIsAllowed = useBoundStore(
    (state) => state.setChangeStickyIsAllowed
  );
  const setIsInSubPageState = useBoundStore(
    (state) => state.setIsInSubPageState
  );

  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
    setIsInSubPageState(true);
    const header = document.querySelector(".main-header-g");
    if (header) {
      setHeaderCanChangeColor();
      setToLight();
      setBottomNavIsShown(true);
      header.classList.remove("hide");
    }
  }, []);
  return (
    <>
      <Head>
        <title>{translateMetaTitlePage404[locale]}</title>
      </Head>
      <section className={classes["section-page-404"]}>
        <div className="container">
          <div className={classes["content-page-404"]}>
            <div className={classes["content-page-404__left"]}>
              <Image
                src="https://api.ondigitals.com/wp-content/uploads/2024/03/bannerpage404.png"
                fill
                style={{ objectFit: "cover" }}
                alt="Ondigitals"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
            <div className={classes["content-page-404__right"]}>
              <h1>{translateTitlePage404[locale]}</h1>
              <p className={classes["content-page-404__right__text"]}>
                {translateTextPage404[locale]}
              </p>
              <Link href="/" onClick={() => (window.location.href = "/")}>
                <Button
                  className="btn-contact-form"
                  RightIcon={<ArrowRight width={24} height={24} color="#FFF" />}
                >
                  {translateButtonPage404[[locale]]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
