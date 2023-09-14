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

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const socialsSharingData = [
  {
    href: "#",
    icon: <FacebookIcon width="24" height="24" color="#3D1766" />,
  },
  {
    href: "#",
    icon: <LinkedIcon width="24" height="24" color="#3D1766" />,
  },
  {
    href: "#",
    icon: <XTwitterIcon width="24" height="24" color="#3D1766" />,
  },
  {
    href: "#",
    icon: <PinterestIcon width="24" height="24" color="#3D1766" />,
  },
];

const TableOfContent = ({ markdown }) => {
  const [tableOfContentIsShown, setTableOfContentIsShown] = useState(true);
  const tocRef = useRef(null);
  const tocWrapperRef = useRef(null);

  const toggleShowTableOfContent = () => {
    setTableOfContentIsShown((oldState) => !oldState);
  };

  const scrollToHandler = (e) => {
    e.preventDefault();
    const element = e.target;
    const elementHref = element.getAttribute("href");
    const targetId = elementHref.slice(elementHref.indexOf("#") + 1);

    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const tableOfContentHeight = tocRef.current.clientHeight;
    if (!tableOfContentIsShown && tocRef && tocWrapperRef) {
        tocWrapperRef.current.style.height = "0";
        return;
    }
    console.log(tableOfContentHeight);
    tocWrapperRef.current.style.height = `${tableOfContentHeight}px`;
  }, [tableOfContentIsShown]);

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
            <Link href={item.href}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
