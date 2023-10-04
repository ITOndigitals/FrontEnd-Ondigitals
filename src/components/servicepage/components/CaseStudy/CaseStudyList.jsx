import CaseStudyItem from "./CaseStudyItem";
import classes from "./CaseStudyList.module.scss";

const CaseStudyList = ({items}) => {
  return (
    <ul className={classes.list}>
        {items.map(item => <CaseStudyItem item={item} href="#" key={item.id}/>)}
    </ul>
  )
}

export default CaseStudyList