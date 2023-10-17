import classes from "./CaseStudyListItemContent.module.scss";
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
// 
const CaseStudyListItemContent = ({ content, dotColor, isDark, listHeading }) => {
  return (
    <>
      <div
        className={classes["case-study-list-item__sub-heading"]}
        style={{ color: isDark ? "black" : "white" }}
      >
        <div
          className={classes["case-study-list-item__sub-heading__circle"]}
          style={{ backgroundColor: dotColor }}
        />
        <p
          className={classes["case-study-list-item__sub-heading__content"]}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        >
          {content.title}
        </p>
      </div>
      {listHeading && (
        <p className={classes["case-study-list-item__list-heading"]}>
          {listHeading}
        </p>
      )}
      <ul
        className={classes["case-study-list-item__list-item"]}
        style={{ color: isDark ? "black" : "white" }}
      >
        {content.contentItems.map((item, index) => (
          <li style={{ fontFamily: MavenPro.style.fontFamily }} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CaseStudyListItemContent;
