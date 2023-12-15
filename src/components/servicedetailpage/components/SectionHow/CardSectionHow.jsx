import React, { useEffect, useState } from "react";
import classes from "./CardSectionHow.module.scss";
import Image from "next/image";
import { DownNavIcon } from "@/components/ui/Icons/ListIcon";
import { Maven_Pro } from "next/font/google";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function CardSectionHow({ data, index }) {
  if (!data) {
    return null;
  }
  const isOdd = index % 2 !== 0;
  const { cardContent, cardTitle, titleStep, iconCardStep } = data;
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550); // Xác định khi nào là giao diện di động (ở đây là 768px, bạn có thể điều chỉnh kích thước tùy theo thiết kế của bạn)
    };

    // Kiểm tra khi mount component
    handleResize();

    // Thêm sự kiện resize để cập nhật biến isMobile khi thay đổi kích thước cửa sổ
    window.addEventListener("resize", handleResize);

    // Xóa sự kiện khi unmount component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openContent = () => {
    setShowContent((old) => !old);
  };
  return (
    <div className={classes["card-section-how"]}>
      <div className={classes["card-section-how__left"]}>
        <p
          style={{ backgroundColor: isOdd ? "#6F1AB6" : "#FF0032" }}
          className={classes["card-section-how__left__dot"]}
        ></p>
        <p className={classes["card-section-how__left__step"]}>{titleStep}</p>
      </div>
      <div className={classes["card-section-how__right"]}>
        <div className={classes["card-section-how__right__icon"]}>
          {iconCardStep && parse(iconCardStep)}
        </div>
        <div
          className={classes["card-section-how__right__content"]}
          onClick={openContent}
        >
          {isMobile ? (
            <>
              <div
                className={classes["card-section-how__right__content__mobile"]}
              >
                <div
                  className={
                    classes["card-section-how__right__content__mobile__left"]
                  }
                >
                  <div
                    className={
                      classes[
                        "card-section-how__right__content__mobile__left__icon"
                      ]
                    }
                  >
                    {iconCardStep && parse(iconCardStep)}
                  </div>
                  <p
                    className={
                      classes["card-section-how__right__content__title"]
                    }
                  >
                    {cardTitle && cardTitle}
                  </p>
                </div>
                <DownNavIcon width={30} height={30} color="#131114" />
              </div>
              {showContent && (
                <div
                  className={classes["card-section-how__right__content__text"]}
                >
                  {cardContent && parse(cardContent)}
                </div>
              )}
            </>
          ) : (
            <>
              <p className={classes["card-section-how__right__content__title"]}>
                {cardTitle && cardTitle}
              </p>
              <div
                className={classes["card-section-how__right__content__text"]}
              >
                {cardContent && parse(cardContent)}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
