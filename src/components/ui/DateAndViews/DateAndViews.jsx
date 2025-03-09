import classes from "./DateAndViews.module.scss";
import { Maven_Pro } from "next/font/google";
import { format, parseISO } from "date-fns";
import { IconAuthor, IconCalendarBlogs, IconEye } from "../Icons/ListIcon";
import dynamic from "next/dynamic";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const StarRating = dynamic(() => import("../../ui/StarRating/starRating"), {
  ssr: false, // Disable server-side rendering
});
const DateAndViews = ({ createDate, views, postId }) => {
  const parsedDate = parseISO(createDate);
  const formattedDate = format(parsedDate, "dd/MM/yyyy");

  return (
    <div
      style={{ fontFamily: MavenPro.style.fontFamily }}
      className={classes["dateview-wrapper"]}
    >
      {postId && <StarRating postId={postId} />}
      <p>
        <IconAuthor color={"#111111"} width={16} height={16} />
        On Digitals
      </p>
      <p>
        <IconCalendarBlogs color={"#111111"} width={16} height={16} />
        {formattedDate}
      </p>
      <p>
        <IconEye color={"#111111"} width={16} height={16} />
        {views}
      </p>
    </div>
  );
};

export default DateAndViews;
