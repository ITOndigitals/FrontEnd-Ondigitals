import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";
import Image from "next/image";
import NotFound from "@/components/ui/NotFound/NotFound";

const BlogList = ({ blogsData, loading, error }) => {
  // if (loading) {
  //   return (
  //     <div  className={classes.check}>
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  if (error) {
    return <p className={classes.check}>Error: {error.message}</p>;
  }
  if (blogsData.length === 0) {
    return <NotFound />;
  }
  return (
    <ul id="list-posts-ods" className={classes.list}>
      {blogsData &&
        blogsData.map((item) => <BlogItem item={item} key={item.id} />)}
    </ul>
  );
};

export default BlogList;
