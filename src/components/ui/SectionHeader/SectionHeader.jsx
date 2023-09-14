import { useState } from "react";
import ExpanseMenu from "../ExpanseMenu/ExpanseMenu";
import { overlayOptions, menuItems } from "@/configurations/menuData";
import classes from "./SectionHeader.module.scss";
import Logo from "../Logo/Logo";
import { useBoundStore } from "@/store/useBoundStore";

const SectionHeader = ({ isDark }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuButtonClasses = `${classes["header-menu-btn"]} ${
    menuIsOpen ? classes["active"] : ""
  }`;
  const setExpanseMenuIsOpen = useBoundStore(
    (state) => state.setExpanseMenuIsOpen
  );

  const toggleMenuButtonHandler = () => {
    if (menuIsOpen) {
      setExpanseMenuIsOpen(false);
      setMenuIsOpen(false);
    } else {
      setExpanseMenuIsOpen(true);
      setMenuIsOpen(true);
    }
  };

  return (
    <>
      <ExpanseMenu
        options={overlayOptions}
        isActive={menuIsOpen}
        menu={menuItems}
      />
      <header className={`${classes["main-header"]} section-header`}>
        <div className="container--big">
          <div className={classes["header-wrapper"]}>
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
      </header>
    </>
  );
};

export default SectionHeader;
