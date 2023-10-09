import classes from "./LoadingSpinner.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const LoadingSpinner = ({ hasOverlay }) => {
  if (hasOverlay) {
    return (
      <div className={classes.overlay}>
        <div className={classes.spinner}></div>
        <div
          className={classes.text}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          ONDIGITALS
        </div>
      </div>
    );
  }
  return (
    <div className={classes["loader-main"]}>
      <div className={classes.loader}></div>
      <div
        className={classes.text}
        style={{ fontFamily: MavenPro.style.fontFamily }}
      >
        ONDIGITALS
      </div>
    </div>
  );
};

export default LoadingSpinner;
