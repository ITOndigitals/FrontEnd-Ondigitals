import Link from "next/link";
import { DownNavIcon, UpNavIcon } from "../../Icons/ListIcon";
import classes from "./SectionNavButtons.module.scss";

const SectionNavButtons = ({ onClick, isDown, isUp, color, noLeftButton }) => {
  return (
    <div className={classes.container}>
      <div className={`container--big ${classes["wrapper"]}`}>
        <Link
          href="#"
          className={`${classes["bottom-nav-item"]} ${noLeftButton ? classes.hide : ""}`}
          style={{ color: color }}
        >
          CONTACT US
        </Link>
        <button onClick={onClick}>
          {isDown && <DownNavIcon width={30} height={30} color={color} />}
          {isUp && <UpNavIcon width={30} height={30} color={color} />}
        </button>
      </div>
    </div>
  );
};

export default SectionNavButtons;
