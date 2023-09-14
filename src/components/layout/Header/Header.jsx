import React, { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.scss";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import Link from "next/link";
import ExpanseMenu from "@/components/ui/ExpanseMenu/ExpanseMenu";
import { overlayOptions, menuItems } from "@/configurations/menuData";
import { useBoundStore } from "../../../store/useBoundStore";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [bottomIsDark, setBottomIsDark] = useState(false);
  const [isOnMobile, setIsOnMobile] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    menuIsOpen ? classes["active"] : ""
  }`;
  const bottomNavIsShownState = useBoundStore(
    (state) => state.bottomNavIsShown
  );
  const [bottomNavIsShown, setBottomNavIsShown] = useState(true);
  const headerIsDark = useBoundStore((state) => state.isDark);
  const headerBtnIsShown = useBoundStore((state) => state.headerBtnIsShown);
  const showHeaderBtn = useBoundStore((state) => state.showHeaderBtn);
  const headerCanChangeColor = useBoundStore(
    (state) => state.headerCanChangeColor
  );
  const setExpanseMenuIsOpen = useBoundStore(
    (state) => state.setExpanseMenuIsOpen
  );

  const toggleMenuButtonHandler = () => {
    if (isOnMobile) {
      setMenuIsOpen((oldState) => !oldState);
    } else {
      if (menuIsOpen) {
        setExpanseMenuIsOpen(false);
        setMenuIsOpen(false);
      } else {
        setExpanseMenuIsOpen(true);
        setMenuIsOpen(true);
      }
    }
  };

  useEffect(() => {
    // console.log(
    //   "can change",
    //   headerCanChangeColor,
    //   "is dark",
    //   headerIsDark
    // );

    if (headerCanChangeColor) {
      setIsDark(headerIsDark);
      setBottomIsDark(headerIsDark);
    }
  }, [headerIsDark, headerCanChangeColor]);

  useEffect(() => {
    const header = document.querySelector(".main-header-g");
    const bottomNav = document.querySelector(".bottom-nav");
    const handleScroll = () => {
      const headerHeight = header.getBoundingClientRect().top;
      const headerScrollOffset = headerHeight + window.scrollY;
      const bottomNavHeight = bottomNav.getBoundingClientRect().top;
      const bottomNavScrollOffset = bottomNavHeight + window.scrollY;
      // Khi scroll trên PC - ẩn section header
      // Second section sẽ là section cuối cùng đối với slider
      // và là section thứ 2 đối với mobile section
      const secondSection = document.querySelector(".service-section");
      const introSection = document.querySelector(".intro-section");
      if (!secondSection || !introSection) return;

      const secondSectionTop = secondSection.offsetTop;
      const secondSectionBottom =
        secondSectionTop + secondSection.offsetHeight - headerHeight;

      if (headerCanChangeColor) {
        if (
          headerScrollOffset >= secondSectionTop &&
          headerScrollOffset <= secondSectionBottom
        ) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }

        if (
          bottomNavScrollOffset >= secondSectionTop &&
          bottomNavScrollOffset <= secondSectionBottom
        ) {
          setBottomIsDark(true);
        } else {
          setBottomIsDark(false);
        }
      }

      // Khi ở mobile, tìm đến section insight và thay đổi thành dark
      const insightSection = document.querySelector(".insights-section");
      const insightSectionTop = insightSection.offsetTop;
      const insightSectionBottom =
        insightSection.offsetTop + insightSection.offsetHeight;
      if (isOnMobile) {
        if (!insightSection) return;

        if (
          headerScrollOffset >= insightSectionTop &&
          headerScrollOffset <= insightSectionBottom
        ) {
          setIsDark(true);
        }
        if (
          bottomNavScrollOffset >= insightSectionTop &&
          bottomNavScrollOffset <= insightSectionBottom
        ) {
          setBottomIsDark(true);
        }
      }
      if (!isOnMobile) {
        if (bottomNavScrollOffset > secondSectionBottom) {
          setBottomNavIsShown(false);
        } else {
          setBottomNavIsShown(true);
        }
      } else {
        if (bottomNavScrollOffset > insightSectionBottom) {
          setBottomNavIsShown(false);
        } else {
          setBottomNavIsShown(true);
        }
      }
    };

    // Thêm lắng nghe sự kiện cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Loại bỏ lắng nghe khi component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOnMobile, headerCanChangeColor]);

  useEffect(() => {
    const handleResize = () => {
      if (headerCanChangeColor) {
        setIsOnMobile(window.innerWidth < 1280);
        const header = document.querySelector(".main-header-g");
        // setIsDark(false);
        showHeaderBtn();
        header.classList.remove("hide");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerCanChangeColor]);

  return (
    <div>
      <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={menuItems}
      />
      <header
        className={`${classes["main-header"]} main-header-g ${
          isDark ? classes["main-header-dark"] : ""
        }`}
      >
        <div className="container--big">
          <div className={classes["header-wrapper"]}>
            <Link href="/">
              <Logo isVisible={!menuIsOpen} isDark={isDark} />
            </Link>
            <div
              className={`${classes["header-wrapper-fn"]} ${
                isDark ? classes["dark-header"] : ""
              }`}
            >
              <Link
                href="#"
                className={`${classes["header-btn"]} ${
                  menuIsOpen || !headerBtnIsShown
                    ? classes["header-btn--hidden"]
                    : ""
                }`}
              >
                <div className={classes["header-btn__wrapper"]}>
                  <FontAwesomeIcon icon={faLanguage} />
                  <span>English</span>
                </div>
              </Link>
              <Link
                href="#"
                className={`${classes["header-btn"]} ${
                  menuIsOpen || !headerBtnIsShown
                    ? classes["header-btn--hidden"]
                    : ""
                }`}
              >
                <div className={classes["header-btn__wrapper"]}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke={isDark ? "black" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke={isDark ? "black" : "white"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Request Credential</span>
                </div>
              </Link>
              <button
                className={menuButtonClasses}
                onClick={toggleMenuButtonHandler}
              >
                <div className={classes.line}></div>
                <div className={classes.line}></div>
                <div className={classes.line}></div>
              </button>
            </div>
          </div>
          <BottomNavigator
            isVisible={
              !menuIsOpen &&
              bottomNavIsShown &&
              headerBtnIsShown &&
              bottomNavIsShownState
            }
            isDark={bottomIsDark}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
