import React, { useState, useEffect } from "react";
import Logo from "@/components/ui/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.scss";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import Link from "next/link";
import ExpanseMenu from "@/components/ui/ExpanseMenu/ExpanseMenu";
import { overlayOptions } from "@/configurations/menuData";
import { useBoundStore } from "../../../store/useBoundStore";
import { useRouter } from "next/router";
import SelectOptionLanguage from "@/components/ui/SelectOption/SelectOptionLanguages";
import PopupForm from "@/components/ui/PopupForm/PopupForm";

const Header = ({ data }) => {
  if (!data) {
    return null;
  }
  const { header } = data?.updatedData;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [bottomIsDark, setBottomIsDark] = useState(true);
  const [isOnMobile, setIsOnMobile] = useState(false);
  const [bottomNavIsShown, setBottomNavIsShown] = useState(true);
  const [subPageHeaderIsSticky, setSubPageHeaderIsSticky] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    menuIsOpen ? classes["active"] : ""
  }`;
  const bottomNavIsShownState = useBoundStore(
    (state) => state.bottomNavIsShown
  );
  const headerIsDark = useBoundStore((state) => state.isDark);
  const headerBtnIsShown = useBoundStore((state) => state.headerBtnIsShown);
  const showHeaderBtn = useBoundStore((state) => state.showHeaderBtn);
  const headerIsSticky = useBoundStore((state) => state.headerIsSticky);
  const setToLight = useBoundStore((state) => state.setToLight);
  const changeStickyIsAllowed = useBoundStore(
    (state) => state.changeStickyIsAllowed
  );
  const isInSubPage = useBoundStore((state) => state.isInSubPage);

  //Note: Chỉ khi biến headerCanChangeColor = true mới có thể chuyển màu
  const headerCanChangeColor = useBoundStore(
    (state) => state.headerCanChangeColor
  );
  const setExpanseMenuIsOpen = useBoundStore(
    (state) => state.setExpanseMenuIsOpen
  );
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const router = useRouter();
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );
  const boxShadowModify = "0px 15px 39px -20px rgba(0,0,0,0.71)";

  //Khi có route thay đổi, đóng expanse menu
  useEffect(() => {
    const onRouteChange = () => {
      setMenuIsOpen(false);
    };

    router.events.on("routeChangeComplete", onRouteChange);

    return () => {
      router.events.off("routeChangeComplete", onRouteChange);
    };
  }, [router]);

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

    // Handle sự kiện cho header, khi bật menu thì ẩn, khi ẩn menu thì xuất hiện
    const header = document.querySelector(".main-header-g");
    if (menuIsOpen) {
      if (subPageHeaderIsSticky) {
        setTimeout(() => {
          header.style.backgroundColor = "#3D1766";
          header.style.boxShadow = boxShadowModify;
        }, 800);
      }
    } else {
      if (subPageHeaderIsSticky) {
        setTimeout(() => {
          header.style.backgroundColor = "transparent";
          header.style.boxShadow = "none";
        }, 100);
      }
    }
  };

  useEffect(() => {
    if (headerCanChangeColor) {
      if (subPageHeaderIsSticky) {
        setIsDark(false);
        setBottomIsDark(false);
      } else {
        setIsDark(headerIsDark);
        setBottomIsDark(headerIsDark);
      }
    }
    if (changeStickyIsAllowed) {
      if (menuIsOpen) {
        setHeaderStickyState(true);
      } else {
        setHeaderStickyState(false);
      }
    }
  }, [headerIsDark, headerCanChangeColor, menuIsOpen]);

  //Xác định các section (tọa độ điểm top và bottom) để set màu lại
  useEffect(() => {
    const header = document.querySelector(".main-header-g");
    const bottomNav = document.querySelector(".bottom-nav");
    const handleScroll = () => {
      const headerHeight = header.getBoundingClientRect().top;
      const headerScrollOffset = headerHeight + window.scrollY;
      const bottomNavHeight = bottomNav?.getBoundingClientRect().top;
      const bottomNavScrollOffset = bottomNavHeight + window.scrollY;
      // Khi scroll trên PC - ẩn section header
      // Second section sẽ là section cuối cùng đối với slider
      // và là section thứ 2 đối với mobile section
      const secondSection = document.querySelector(".service-section");
      const introSection = document.querySelector(".intro-section");
      //const contactInforSection = document.querySelector(".contact-infor");
      if (secondSection && introSection) {
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
      }

      // Khi ở mobile, tìm đến section insight và thay đổi thành dark
      const insightSection = document.querySelector(".insights-section");
      if (insightSection) {
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
        if (!isOnMobile && secondSection) {
          const secondSectionTop = secondSection.offsetTop;
          const secondSectionBottom =
            secondSectionTop + secondSection.offsetHeight - headerHeight;

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

  //Nếu header đang không sticky, set header sang dark và không cho đổi màu
  useEffect(() => {
    if (!headerIsSticky) {
      setHeaderCanNotChangeColor();
      setBottomNavIsShown(false);
    } else {
      setHeaderCanChangeColor();
      setBottomNavIsShown(true);
    }
  }, [headerIsSticky]);

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.scrollY > elTopOffset + elHeight) {
      setSubPageHeaderIsSticky(true);
    } else {
      setSubPageHeaderIsSticky(false);
    }
  };

  // handle tùy chỉnh headerIsSticky
  useEffect(() => {
    const header = document.querySelector(".main-header-g");
    if (subPageHeaderIsSticky) {
      setHeaderCanChangeColor(true);
      setToLight();
      setIsDark(false);
      header.style.backgroundColor = "#3D1766";
      header.style.boxShadow = boxShadowModify;
    } else {
      setIsDark(headerIsDark);
      setBottomIsDark(headerIsDark);
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
    }
  }, [subPageHeaderIsSticky]);

  // Khi ở subpage, hiển thị lại header dưới dạng sticky và có background
  useEffect(() => {
    // Flow code chỉ hoạt động khi không hiển thị header dạng không background,
    // biến headerIsSticky quản lý state của header dạng không background
    if (!headerIsSticky && isInSubPage) {
      const header = document
        .querySelector(".main-header-g")
        .getBoundingClientRect();

      const handleScrollEvent = () => {
        handleScroll(header.top, header.height * 2);
      };

      window.addEventListener("scroll", handleScrollEvent);

      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    }
    if (headerIsSticky && !isInSubPage) {
      setSubPageHeaderIsSticky(false);
    }
  }, [headerIsSticky, isInSubPage]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const setChangeStickyIsAllowed = useBoundStore(
    (state) => state.setChangeStickyIsAllowed
  );
  const setIsInSubPageState = useBoundStore(
    (state) => state.setIsInSubPageState
  );
  useEffect(() => {
    if (isOnMobile) {
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
    }
  }, [isOnMobile]);
  return (
    <div>
      <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={data} //prop menu lưu data về menu, khi có api đa ngôn ngữ thì sửa lại
      />
      <header
        className={`${classes["main-header"]} main-header-g ${
          isDark ? classes["main-header-dark"] : ""
        } ${!headerIsSticky ? classes["main-header-no-sticky"] : ""} ${
          subPageHeaderIsSticky ? classes["sticky-in-subpage"] : ""
        } ${menuIsOpen ? classes["menu-open"] : ""}`}
      >
        <div className="container--big">
          <div
            style={{ display: menuIsOpen ? "block" : "flex" }}
            className={classes["header-wrapper"]}
          >
            <Logo isVisible={!menuIsOpen} isDark={isDark} />
            <div
              style={{ justifyContent: menuIsOpen ? "space-between" : "unset" }}
              className={`${classes["header-wrapper-fn"]} ${
                isDark ? classes["dark-header"] : ""
              }`}
            >
              <div
                className={`${classes["header-btn"]} ${
                  menuIsOpen
                    ? classes["header-btn__language"]
                    : classes["header-btn__languageMobile"]
                } ${!headerBtnIsShown ? classes["header-btn--hidden"] : ""}`}
              >
                <div className={classes["header-btn__wrapper"]}>
                  <SelectOptionLanguage isDark={isDark} />
                </div>
              </div>
              <div
                className={`${classes["header-btn"]} ${
                  classes["header-btn__Request"]
                } ${
                  menuIsOpen || !headerBtnIsShown
                    ? classes["header-btn--hidden"]
                    : ""
                }`}
              >
                <div
                  onClick={togglePopup}
                  className={classes["header-btn__wrapper"]}
                >
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
                  <span>{header?.textRequestCredential}</span>
                </div>
                {isPopupOpen && (
                  <PopupForm
                    dataForm={header}
                    isOpen={isPopupOpen}
                    onClose={togglePopup}
                  />
                )}
              </div>
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
          {!subPageHeaderIsSticky && !isOnMobile && (
            <BottomNavigator
              isVisible={
                !menuIsOpen &&
                bottomNavIsShown &&
                headerBtnIsShown &&
                bottomNavIsShownState
              }
              isDark={bottomIsDark}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
