import React, { useState } from "react";
import classes from "./ButtonSearch.module.scss";
import { CancelIcon, SearchIcon } from "../../Icons/ListIcon";
import { useFormik } from "formik";
import { GetPostById, SearchPostsByKey } from "@/pages/api/graphql";

export default function ButtonSearch({ onSearch, color}) {
  const [isSearchIcon, setIsSearchIcon] = useState(true);
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: handleSubmit,
  });
  const handleClick = () => {
    setIsSearchIcon((prev) => !prev);
    formik.setFieldValue("text", "");
  };
  async function handleSubmit(searchValue) {
    console.log(searchedPost);
    onSearch(searchValue);
    formik.resetForm();
    handleClick();
  }
  return (
    <>
      <div
        className={classes["button-search"]}
        style={{ borderColor: color ? color : "rgba(19, 17, 20, 1)" }}
      >
        <div
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
        </div>
        <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.text}
              required
              autoComplete="off"
            />
            {!isSearchIcon && formik.values.text && (
              <svg
                viewBox="0 0 640 512"
                width="20"
                title="backspace"
                style={{ marginRight: "10px" }}
                onClick={() => formik.setFieldValue("text", "")}
                fill={color ? color : "rgba(19, 17, 20, 1)"}
              >
                <path d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z" />
              </svg>
            )}
          </div>
          <button
            className={`${isSearchIcon && classes["btn-hide"]}`}
            type="submit"
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

/* <div className={classes["input-search"]}>
            {!isSearchIcon && <SearchInput closeForm={handleClick} />}
          </div> */
