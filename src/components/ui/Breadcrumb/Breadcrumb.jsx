import classes from "./Breadcrumb.module.scss";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({ data }) => {
  console.log(data)
  return (
    <ul className={classes.breadcrumb}>
      {data.map((item, index) => (
        <BreadcrumbItem key={index} item={item} order={index} />
      ))}
    </ul>
  );
};

export default Breadcrumb;
