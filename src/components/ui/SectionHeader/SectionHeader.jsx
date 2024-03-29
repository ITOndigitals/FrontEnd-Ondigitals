import { useEffect, useState } from "react";
import ExpanseMenu from "../ExpanseMenu/ExpanseMenu";
import { overlayOptions, menuItems } from "@/configurations/menuData";
import classes from "./SectionHeader.module.scss";
import Logo from "../Logo/Logo";
import { useBoundStore } from "@/store/useBoundStore";
import { getDataMenu } from "@/pages/api/graphqlHeaderFooter";
import { useRouter } from "next/router";

const SectionHeader = ({ isDark }) => {
  // const { locale } = useRouter();
  // const language = locale.toUpperCase();
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const [data, setData] = useState(null);
  // const menuButtonClasses = `${classes["header-menu-btn"]} ${
  //   menuIsOpen ? classes["active"] : ""
  // }`;
  // const setExpanseMenuIsOpen = useBoundStore(
  //   (state) => state.setExpanseMenuIsOpen
  // );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await getDataMenu(language);
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // const toggleMenuButtonHandler = () => {
  //   if (menuIsOpen) {
  //     setExpanseMenuIsOpen(false);
  //     setMenuIsOpen(false);
  //   } else {
  //     setExpanseMenuIsOpen(true);
  //     setMenuIsOpen(true);
  //   }
  // };

  return (
    <>
      {/* <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={data && data}
      />
      <header className={`${classes["main-header"]} section-header`}>
        <div className="container--big">
          <div
            style={{
              justifyContent: menuIsOpen ? "flex-end" : "space-between",
            }}
            className={classes["header-wrapper"]}
          >
            <Logo isVisible={!menuIsOpen} isDark={isDark} />
            <div
              className={`${classes["header-wrapper-fn"]} ${
                isDark && !menuIsOpen ? classes.dark : ""
              }`}
            >
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
        </div>
      </header> */}
    </>
  );
};

export default SectionHeader;
