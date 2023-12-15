import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import BlogItem from "./BlogItem";
import classes from "./BlogList.module.scss";
import Image from "next/image";

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
    return (
      <div style={{ padding: "0" }} className={classes.check}>
        <div style={{ position: "relative" }}>
          <Image
            src="https://api.ondigitals.com/wp-content/uploads/2023/10/image-search-nodata-jpg.webp"
            alt="Ondigitals"
            width="0"
            height="0"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "400px",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      </div>
    );
  }
  return (
    <ul id="list-posts-ods" className={classes.list}>
      {blogsData &&
        blogsData.map((item) => <BlogItem item={item} key={item.id} />)}
    </ul>
  );
};

export default BlogList;
