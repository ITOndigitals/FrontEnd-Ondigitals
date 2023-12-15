import { useRef, useState } from "react";
import classes from "./ButtonSearch.module.scss";
import { CancelIcon, SearchIcon } from "../../Icons/ListIcon";

export default function ButtonSearch({ onSearch, color }) {
  const [isSearchIcon, setIsSearchIcon] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsSearchIcon((prev) => !prev);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleClickBtn = () => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const submitSearchHandler = (e) => {
    e.preventDefault();

    if (searchValue !== "") {
      onSearch(searchValue);
      handleClick();
      setSearchValue("");
    }
  };

  return (
    <>
      <div
        className={classes["button-search"]}
        style={{ borderColor: color ? color : "rgba(19, 17, 20, 1)" }}
      >
        <button
          className={`${
            isSearchIcon ? classes["icon-hide"] : classes["icon-show"]
          }`}
          onClick={handleClick}
        >
          {isSearchIcon ? (
            <SearchIcon
              width={24}
              height={24}
              color={color ? color : "rgba(19, 17, 20, 1)"}
            />
          ) : (
            <CancelIcon
              width={24}
              height={24}
              color={color ? color : "rgba(19, 17, 20, 1)"}
            />
          )}
        </button>
        <form onSubmit={submitSearchHandler}>
          <div
            className={`${
              isSearchIcon
                ? classes["form-input-hide"]
                : classes["form-input-show"]
            }`}
          >
            <input
              style={{ color: color ? color : "rgba(19, 17, 20, 1)" }}
              placeholder="Search...."
              id="text"
              name="text"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required
              autoComplete="off"
              ref={inputRef}
            />
            {!isSearchIcon && searchValue !== "" && (
              <svg
                viewBox="0 0 640 512"
                width="20"
                title="backspace"
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => setSearchValue("")}
                fill={color ? color : "rgba(19, 17, 20, 1)"}
              >
                <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z" />
              </svg>
            )}
          </div>
          <button
            className={`${isSearchIcon && classes["btn-hide"]}`}
            type="submit"
            onClick={handleClickBtn}
          >
            <SearchIcon
              width={24}
              height={24}
              color={color ? color : "rgba(19, 17, 20, 1)"}
            />
          </button>
        </form>
      </div>
    </>
  );
}
