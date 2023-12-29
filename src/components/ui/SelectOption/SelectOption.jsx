import { useEffect, useRef, useState } from "react";
import classes from "./SelectOption.module.scss";
import { DownNavIcon } from "../Icons/ListIcon";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const SelectOption = ({ options, label, color, handleSort }) => {
  if (!options) {
    return <LoadingSpinner />;
  }
  const [choosenItemId, setChoosenItemId] = useState(
    options[0]?.id || options[0]?.categoryId
  );
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
    const dataKey = event.target.getAttribute("data-key");
    {
      dataKey && handleSort(dataKey);
    }
    if (value === choosenItemId) {
      setDropdownIsOpen(false);
      return;
    }
    const foundedItemIdx = options.findIndex(
      (option) => option?.id === value || option?.categoryId === value
    );
    setChoosenItemName(options[foundedItemIdx]?.name);
    setChoosenItemId(value);
    setDropdownIsOpen(false);
  };

  return (
    <div className={classes.select}>
      <div
        className={classes["select-label"]}
        style={{ color: color ? color : "black" }}
      >
        {label}
      </div>
      <div className={classes["select-wrapper"]} ref={optionsRef}>
        <div
          style={{ borderWidth: "1px", borderColor: color ? color : "black" }}
          className={classes["select-name"]}
          onClick={() => {
            setDropdownIsOpen((oldState) => !oldState);
          }}
        >
          <div
            className={classes["select-name__content"]}
            style={{ color: color ? color : "black" }}
          >
            {choosenItemName}
          </div>
          <DownNavIcon width="24" height="24" color={color ? color : "black"} />
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
              value={item?.id}
              data-key={item?.dataKey || item?.categoryId}
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
