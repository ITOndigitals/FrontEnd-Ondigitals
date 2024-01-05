import React from "react";
import clasese from "./NotFound.module.scss";
import { IconNotFound } from "../Icons/ListIcon";
export default function NotFound() {
  return (
    <div className={clasese["not-found"]}>
      <div className={clasese["not-found__icon"]}>
        <IconNotFound width={223} height={210} />
      </div>
      <div className={clasese["not-found__content"]}>
        <p className={clasese["not-found__content__feeling"]}>Oops!</p>
        <p className={clasese["not-found__content__title"]}>
          Nothing matches your search
        </p>
        <p className={clasese["not-found__content__text"]}>
          Maybe try different keywords?
        </p>
      </div>
    </div>
  );
}
