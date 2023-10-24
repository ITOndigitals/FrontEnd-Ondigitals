import Link from "next/link";
import classes from "./BreadcrumbItem.module.scss";
import { Maven_Pro } from "next/font/google";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

const BreadcrumbItem = ({ item, order }) => {
  return (
    <li className={classes.item} style={{fontFamily: MavenPro.style.fontFamily}}>
      {order > 0 && (
        <div className={`${classes.circle} ${classes[`order-${order}`]}`} />
      )}
      <Link href={item.url}>{parse(item.title)}</Link>
    </li>
  );
};

export default BreadcrumbItem;
