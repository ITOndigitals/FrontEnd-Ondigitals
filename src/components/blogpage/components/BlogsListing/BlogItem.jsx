import BlogCard from "@/components/ui/BlogCard/BlogCard";
import classes from "./BlogItem.module.scss";

const BlogItem = ({ item }) => {
  return (
    <li className={classes.item}>
      <BlogCard data={item} />
    </li>
  );
};

export default BlogItem;
