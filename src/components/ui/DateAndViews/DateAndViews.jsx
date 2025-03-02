import classes from "./DateAndViews.module.scss";
import { Maven_Pro } from "next/font/google";
import { format, parseISO } from "date-fns";
import { IconAuthor, IconCalendarBlogs, IconEye } from "../Icons/ListIcon";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DateAndViews = ({ createDate, views }) => {
  const parsedDate = parseISO(createDate);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");

  return (
    <div className={classes["dateview-wrapper"]}>
      <p style={{ fontFamily: MavenPro.style.fontFamily }}>
        <IconAuthor color={"#111111"} width={16} height={16} />
        On Digitals
      </p>
      <p style={{ fontFamily: MavenPro.style.fontFamily }}>
        <IconCalendarBlogs color={"#111111"} width={16} height={16} />
        {formattedDate}
      </p>
      <p style={{ fontFamily: MavenPro.style.fontFamily }}>
        <IconEye color={"#111111"} width={16} height={16} />
        {views}
      </p>
    </div>
  );
};

export default DateAndViews;
