import ButtonSearch from "@/components/ui/Buttons/ButtonsSearch/ButtonSearch";
import SelectOption from "@/components/ui/SelectOption/SelectOption";
import classes from "./CaseStudiesFilters.module.scss";
import { useRouter } from "next/router";
import { GET_CATEGORY_POST, GET_TAG } from "@/pages/api/graphqlApollo";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useMemo } from "react";

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
];

const CaseStudiesFilters = ({ handleSort, handleByCategory,handleByTags, color, title }) => {
  const { locale } = useRouter();
  const { titleService, titleSortby, tittleIndustry } = title;
  const [getCategoryCaseStudy, { data: dataCate }] =
    useLazyQuery(GET_CATEGORY_POST);
  const [getTagCaseStudy, { data: dataTag }] = useLazyQuery(GET_TAG);

  // Gọi các truy vấn khi locale thay đổi
  useEffect(() => {
    getCategoryCaseStudy({ variables: { language: locale.toUpperCase() } });
    getTagCaseStudy({ variables: { language: locale.toUpperCase() } });
  }, [locale]);

  // Tạo danh sách các category và tag mới
  const listNewCategory = useMemo(() => {
    if (!dataCate?.categories?.nodes) return null;
    return [
      { name: "All", slug: "all", categoryId: 0, id: 1 },
      ...dataCate.categories.nodes.slice(1).map((item, index) => ({
        ...item,
        id: index + 2,
      })),
    ];
  }, [dataCate]);

  const listTags = useMemo(() => {
    if (!dataTag?.tags?.nodes) return null;
    return [
      { name: "All", slug: "all", categoryId: 0, id: 1 },
      ...dataTag.tags.nodes.map((item, index) => ({
        ...item,
        categoryId: item.tagId, // Thay đổi trường tagId thành categoryId
        id: index + 2,
      })),
    ];
  }, [dataTag]);
  return (
    <>
      <div className={classes.item}>
        <SelectOption
          options={listNewCategory}
          label={titleService}
          color={color}
          handleSort={handleByCategory}
        />
      </div>
      <div className={classes.item}>
        <SelectOption
          options={listTags}
          label={tittleIndustry}
          color={color}
          handleSort={handleByTags}
        />
      </div>
      <div className={classes.item}>
        <SelectOption
          options={DUMMY_SORT_BY}
          label={titleSortby}
          color={color}
          handleSort={handleSort}
        />
      </div>
    </>
  );
};

export default CaseStudiesFilters;
