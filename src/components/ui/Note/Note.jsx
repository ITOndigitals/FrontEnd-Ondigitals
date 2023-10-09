import classes from "./Note.module.scss";
import React, { useEffect, useState } from "react";

export default function Note({ isSuccess, icon, backgroundColor, content }) {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsShown(false);
    }, 3000);

    return () => {
      clearTimeout(visibilityTimer);
    };
  }, []);

  return (
    <>
      <div
        className={`${classes["notification"]} ${!isShown ? classes.hide : ""}`}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {icon}
        <p>{content}</p>
      </div>
    </>
  );
}
