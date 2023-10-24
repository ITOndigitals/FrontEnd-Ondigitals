import CaseStudyItem from "./CaseStudyItem";
import classes from "./CaseStudiesList.module.scss";

const CaseStudiesList = ({ items }) => {
  return (
    <div className={classes["case-study-wrapper"]}>
      <ul className={classes["case-study-list"]}>
        {items.nodes.map((item, index) => (
          <CaseStudyItem item={item} key={item.case_studyId} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default CaseStudiesList;

