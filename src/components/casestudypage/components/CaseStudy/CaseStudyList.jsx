import NotFound from "@/components/ui/NotFound/NotFound";
import CaseStudyItem from "./CaseStudyItem";
import classes from "./CaseStudyList.module.scss";

const CaseStudyList = ({ items }) => {
  if (items.length < 1) return <p className={classes.nodata}>No Data</p>;
  return (
    <div className={`${classes.list} list-case-study`}>
      {items.map((item, index) => (
        <CaseStudyItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CaseStudyList;
