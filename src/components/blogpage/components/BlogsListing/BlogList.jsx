import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";

const BlogList = ({ blogsData }) => {
  return (
    <ul className={classes.list}>
      {blogsData.map((item) => (
        <BlogItem item={item} key={item.id}/>
      ))}
    </ul>
  );
};

export default BlogList;
