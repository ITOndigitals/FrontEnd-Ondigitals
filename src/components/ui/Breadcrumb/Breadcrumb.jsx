import classes from "./Breadcrumb.module.scss";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ data }) => {
  return (
    <ul className={classes.breadcrumb}>
      {data.map((item, index) => (
        <BreadcrumbItem key={item.id} item={item} order={index} />
      ))}
    </ul>
  );
};

export default Breadcrumb;
