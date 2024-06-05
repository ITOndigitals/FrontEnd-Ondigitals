import SelectOption from "@/components/ui/SelectOption/SelectOption";
import classes from "./BlogsHeader.module.scss";
import ButtonSearch from "@/components/ui/Buttons/ButtonsSearch/ButtonSearch";
import { GET_CATEGORY_POST } from "@/pages/api/graphqlApollo";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";


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
];

const BlogsHeader = ({ onSearch, handleSort, filterCategory, dataContent }) => {
  const { locale } = useRouter();
  const { textDescription, title, textSortBy, textFilterCategory } =
    dataContent;
  const [getCategoryBlog, { loading, error, data }] =
    useLazyQuery(GET_CATEGORY_POST);
  useEffect(() => {
    getCategoryBlog({
      variables: {
        language: locale.toUpperCase(),
      },
    });
  }, [locale]);
  let dataCategory = data?.categories?.nodes;
  let listNewCategory = dataCategory;
  if (listNewCategory) {
    listNewCategory = [
      {
        name: "All",
        slug: "all",
        categoryId: 0,
        id: 1,
      },
      ...listNewCategory.slice(1).map((item, index) => ({
        ...item,
        id: index + 2,
      })),
    ];
  }
  return (
    <div className={classes["blog-header"]}>
      <div className={classes["blog-header-left-item"]}>
        <p className={classes["blog-header-left-item__heading"]}>
         {title && title}
        </p>
        <p className={classes["blog-header-left-item__desc"]}>
          {textDescription && textDescription}
        </p>
      </div>
      <div className={classes["blog-header-right-item"]}>
        {/* <div className={classes["blog-header-right-item__option"]}>
          <SelectOption options={DUMMY_CATEGORIES} label="category" />
        </div> */}
        <div className={classes["blog-header-right-item__option"]}>
          <div className={classes["blog-header-right-item__option--no-mg"]}>
            <SelectOption
              options={listNewCategory && listNewCategory}
              label={textFilterCategory}
              handleSort={filterCategory}
            />
          </div>
          <div className={classes["blog-header-right-item__option--mg"]}>
            <SelectOption
              handleSort={handleSort}
              options={DUMMY_SORT_BY}
              label={textSortBy}
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
