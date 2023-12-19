import SelectOption from "@/components/ui/SelectOption/SelectOption";
import classes from "./BlogsHeader.module.scss";
import ButtonSearch from "@/components/ui/Buttons/ButtonsSearch/ButtonSearch";
import { GET_CATEGORY_POST } from "@/pages/api/graphqlApollo";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DUMMY_CATEGORIES = [
  {
    id: 1,
    name: "ALL",
  },
  {
    id: 2,
    name: "SEO",
  },
  {
    id: 3,
    name: "PPC",
  },
  {
    id: 4,
    name: "Content Marketing",
  },
  {
    id: 5,
    name: "Social Media",
  },
  {
    id: 6,
    name: "Website / App Development",
  },
  {
    id: 7,
    name: "Creative Design",
  },
];

const DUMMY_SORT_BY = [
  {
    id: 1,
    name: "Newest",
    dataKey: "DESC",
  },
  {
    id: 2,
    name: "Oldest",
    dataKey: "ASC",
  },
  {
    id: 3,
    name: "Most popular",
    dataKey: "ASC",
  },
];

const BlogsHeader = ({ onSearch, handleSort, filterCategory }) => {
  const { locale } = useRouter();
  const [getCategoryBlog, { loading, error, data }] =
    useLazyQuery(GET_CATEGORY_POST);
  useEffect(() => {
    getCategoryBlog({
      variables: {
        language: locale.toUpperCase(),
      },
    });
  }, []);
  const dataCategory = data?.categories?.nodes;
  console.log(dataCategory);
  return (
    <div className={classes["blog-header"]}>
      <div className={classes["blog-header-left-item"]}>
        <p className={classes["blog-header-left-item__heading"]}>
          News & Insights
        </p>
        <p className={classes["blog-header-left-item__desc"]}>
          Get update with latest Digital news, trends and insights
        </p>
      </div>
      <div className={classes["blog-header-right-item"]}>
        {/* <div className={classes["blog-header-right-item__option"]}>
          <SelectOption options={DUMMY_CATEGORIES} label="category" />
        </div> */}
        <div className={classes["blog-header-right-item__option"]}>
          <div className={classes["blog-header-right-item__option--no-mg"]}>
            <SelectOption
              options={dataCategory && dataCategory}
              label="category"
              handleSort={filterCategory}
            />
          </div>
          <div className={classes["blog-header-right-item__option--mg"]}>
            <SelectOption
              handleSort={handleSort}
              options={DUMMY_SORT_BY}
              label="sort by"
            />
          </div>
          <div className={classes["blog-header-right-item__option__search"]}>
            <ButtonSearch onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeader;
