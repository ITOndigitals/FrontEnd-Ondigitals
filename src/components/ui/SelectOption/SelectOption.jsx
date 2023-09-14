import { useEffect, useRef, useState } from "react";
import classes from "./SelectOption.module.scss";
import { DownNavIcon } from "../Icons/ListIcon";

const SelectOption = ({ options, label, name }) => {
  const [choosenItemId, setChoosenItemId] = useState(options[0].id);
  const [choosenItemName, setChoosenItemName] = useState(options[0].name);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const optionsRef = useRef(null);
  if (options.length === 0) {
    return <div>No data...</div>;
  }

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setDropdownIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onChooseOption = (event) => {
    const value = +event.target.value;
    if (value === choosenItemId) {
      setDropdownIsOpen(false);
      return;
    }
    const foundedItemIdx = options.findIndex((option) => option.id === value);
    setChoosenItemName(options[foundedItemIdx].name);
    setChoosenItemId(value);
    setDropdownIsOpen(false);
  };

  return (
    <div className={classes.select}>
      <div className={classes["select-label"]}>{label}</div>
      <div className={classes["select-wrapper"]} ref={optionsRef}>
        <div
          style={{ borderWidth: dropdownIsOpen ? "2px" : "1px" }}
          className={classes["select-name"]}
          onClick={() => {
            setDropdownIsOpen((oldState) => !oldState);
          }}
        >
          <div className={classes["select-name__content"]}>
            {choosenItemName}
          </div>
          <DownNavIcon width="24" height="24" color="black" />
        </div>
        <ul
          className={`${classes["select-list"]} ${
            dropdownIsOpen ? classes.show : ""
          }`}
        >
          {options.map((item) => (
            <li
              onClick={onChooseOption}
              key={item.id}
              className={classes["select-list-item"]}
              value={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectOption;
