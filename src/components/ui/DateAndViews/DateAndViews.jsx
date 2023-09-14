import classes from "./DateAndViews.module.scss";
import { Maven_Pro } from "next/font/google";
import { format, parseISO } from "date-fns";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DateAndViews = ({createDate, views}) => {
  const parsedDate = parseISO(createDate);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");

  return (
    <div className={classes["dateview-wrapper"]}>
      <p style={{ fontFamily: MavenPro.style.fontFamily }}>
        <i
          className="fa-regular fa-calendar"
          style={{ marginRight: "5px" }}
        ></i>
        {formattedDate}
      </p>
      <p style={{ fontFamily: MavenPro.style.fontFamily }}>
        <i className="fa-regular fa-eye" style={{ marginRight: "5px" }}></i>
        {views}
      </p>
    </div>
  );
};

export default DateAndViews;
