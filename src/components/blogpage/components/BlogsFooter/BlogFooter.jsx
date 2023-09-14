import CustomPagination from "@/components/ui/Pagination/CustomPagination";

const BlogFooter = ({ onChangePage }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <CustomPagination onChangePage={onChangePage} />
    </div>
  );
};

export default BlogFooter;
