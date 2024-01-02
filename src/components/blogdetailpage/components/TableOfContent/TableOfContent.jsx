import {
  DownNavIcon,
  FacebookIcon,
  LinkedIcon,
  PinterestIcon,
  XTwitterIcon,
} from "@/components/ui/Icons/ListIcon";
import classes from "./TableOfContent.module.scss";
import Link from "next/link";
import { Maven_Pro } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { frontendUrl } from "../../../../../utils/variables";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const TableOfContent = ({ markdown }) => {
  if (markdown.length === 0) {
    return null;
  }
  const [tableOfContentIsShown, setTableOfContentIsShown] = useState(true);
  const tocRef = useRef(null);
  const tocWrapperRef = useRef(null);
  const router = useRouter();
  const fullCurrentPath =
    typeof window !== "undefined" ? window.location.href : "";
  const toggleShowTableOfContent = () => {
    setTableOfContentIsShown((oldState) => !oldState);
  };

  //Bắt sự kiện scroll tới khi nhấn TOC
  const scrollToHandler = (e) => {
    e.preventDefault();
    const element = e.target;
    const elementHref = element.getAttribute("href");
    const targetId = elementHref.slice(elementHref.indexOf("#") + 1);

    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  //Bắt sự kiện click vào nút expanse trên TOC
  useEffect(() => {
    const tableOfContentHeight = tocRef.current.clientHeight;
    if (!tableOfContentIsShown && tocRef && tocWrapperRef) {
      tocWrapperRef.current.style.height = "0";
      return;
    }
    tocWrapperRef.current.style.height = `${tableOfContentHeight + 20}px`;
  }, [tableOfContentIsShown]);

  //Set lại height phòng khi user đổi sang kích thước màn hình khác
  useEffect(() => {
    const handleResize = () => {
      const tableOfContentHeight = tocRef.current.clientHeight;
      tocWrapperRef.current.style.height = `${tableOfContentHeight + 20}px`;
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socialsSharingData = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        fullCurrentPath
      )}`,

      icon: <FacebookIcon width="24" height="24" color="#3D1766" />,
    },
    {
      href: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        fullCurrentPath
      )}`,
      icon: <LinkedIcon width="24" height="24" color="#3D1766" />,
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        fullCurrentPath
      )}`,
      icon: <XTwitterIcon width="24" height="24" color="#3D1766" />,
    },
    {
      href: `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
        fullCurrentPath
      )}`,

      icon: <PinterestIcon width="24" height="24" color="#3D1766" />,
    },
  ];

  return (
    <div className={classes.toc}>
      <div className={classes["toc-heading"]}>
        <p className={classes["toc-heading__content"]}>TABLE OF CONTENTS</p>
        <button
          className={`${classes["toc-heading__btn"]} ${
            !tableOfContentIsShown ? classes.hide : ""
          }`}
          onClick={toggleShowTableOfContent}
        >
          <DownNavIcon width={30} height={30} color="#131114" />
        </button>
      </div>
      <div
        ref={tocWrapperRef}
        className={`${classes["toc-list-wrapper"]} ${
          !tableOfContentIsShown ? classes.hide : ""
        }`}
      >
        <ul
          ref={tocRef}
          className={classes["toc-list"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          {markdown.map((markdownItem, idx) => (
            <li
              className={classes[`toc-list__item--${markdownItem.level}`]}
              key={idx}
            >
              <Link href={markdownItem.href} onClick={scrollToHandler}>
                {markdownItem.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.line}></div>
      <p className={classes["socials-heading"]}>SHARE THIS POST</p>
      <ul className={classes.socials}>
        {socialsSharingData.map((item, index) => (
          <li key={index}>
            <Link target="_blank" href={item.href}>
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
