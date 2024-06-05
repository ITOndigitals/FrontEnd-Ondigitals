import classes from "./CaseStudy.module.scss";
import CaseStudiesFilters from "../CaseStudiesFilters/CaseStudiesFilters";
import CaseStudyList from "./CaseStudyList";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GET_CASE_STUDY_BY_FILTER } from "@/pages/api/graphqlApollo";
import { useLazyQuery } from "@apollo/client";

export default function CaseStudy({ data }) {
  const { locale } = useRouter();
  const { nodes, pageInfo, sectionListCaseStudy } = data;
  const { hasNextPage, endCursor } = pageInfo;
  const language = locale.toUpperCase();
  const first = 4;
  const [isNexPage, setIsNexPage] = useState(hasNextPage);
  const [listCaseStudy, setListCaseStudy] = useState(nodes);
  const [orderBy, setOrderBy] = useState("DESC");
  const [idCategory, setIdCategory] = useState(0);
  const [idTags, setIdTags] = useState("0");
  const [isFilterPanigation, setIsFilterPanigation] = useState(endCursor);
  const [isUseFilter, setIsUseFilter] = useState(false);
  const { backgroundColor, title, titleService, titleSortby, tittleIndustry } =
    sectionListCaseStudy;
  const [filterCaseStudy, { loading, error, data: dataCaseStudy }] =
    useLazyQuery(GET_CASE_STUDY_BY_FILTER);

  const handleSortCaseStudy = (keySort) => {
    filterCaseStudy({
      variables: {
        categoryId: idCategory,
        order: keySort,
        language: language,
        tagId: idTags,
        after: "",
        first: first,
      },
    });
    setOrderBy(keySort);
    setIsUseFilter(true);
  };
  const handleByCategory = (idCate) => {
    filterCaseStudy({
      variables: {
        categoryId: Number(idCate),
        order: orderBy,
        language: language,
        tagId: idTags,
        after: "",
        first: first,
      },
    });
    setIdCategory(Number(idCate));
    setIsUseFilter(true);
  };
  const handleByTags = (idTags) => {
    console.log(idTags);
    filterCaseStudy({
      variables: {
        categoryId: idCategory,
        order: orderBy,
        language: language,
        tagId: idTags.toString(),
        after: "",
        first: first,
      },
    });
    setIdTags(idTags.toString());
    setIsUseFilter(true);
  };

  // handle panigation
  useEffect(() => {
    const listItems = document.querySelectorAll(
      ".list-case-study .case-study-item"
    );
    const lastListItem = listItems[listItems.length - 1];
    let observer;
    const observeLastItem = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Thực hiện filterCaseStudy khi phần tử cuối cùng thấy được
          filterCaseStudy({
            variables: {
              tagId: idTags,
              language: language,
              order: orderBy,
              first: first,
              categoryId: idCategory,
              after: isFilterPanigation || "",
            },
          });
        }
      });
    };

    if (lastListItem) {
      observer = new IntersectionObserver(observeLastItem, {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      });

      observer.observe(lastListItem);
    }

    return () => {
      if (observer && lastListItem) {
        observer.unobserve(lastListItem);
      }
    };
  }, [isFilterPanigation]);

  useEffect(() => {
    if (dataCaseStudy) {
      const { nodes, pageInfo } = dataCaseStudy?.allCaseStudy;
      const { endCursor, hasNextPage: checkIsHasNextPage } = pageInfo;
      setIsFilterPanigation(endCursor);
      setIsNexPage(checkIsHasNextPage);
      if (isUseFilter && nodes.length > 0) {
        setListCaseStudy(nodes);
        setIsUseFilter(false);
      }
      if (isNexPage && !isUseFilter) {
        setListCaseStudy((prevData) => [...prevData, ...nodes]);
        setIsUseFilter(false);
      }
      if (!isNexPage) {
        setIsFilterPanigation(endCursor);
        setIsFilterPanigation("");
      }
      if (nodes.length === 0 && (idTags || idCategory)) {
        if (listCaseStudy.length > 0 && !isUseFilter) {
          setListCaseStudy((prevData) => [...prevData, ...nodes]);
        } else {
          setListCaseStudy([]);
        }
      }
    }
  }, [dataCaseStudy]);
  // update data when change lanuguage
  useEffect(() => {
    setListCaseStudy(nodes);
    setIsFilterPanigation(endCursor);
  }, [data]);
  
  if (error) return <p>Error: {error.message}</p>;
  return (
    <section
      style={{ backgroundColor: backgroundColor }}
      className={classes["case-study"]}
    >
      <div className="container">
        <div className={classes["case-study-main"]}>
          <div className={classes["case-study-main-head"]}>
            <p className={classes["case-study-main-head__content"]}>
              {title && title}
            </p>
          </div>
          <div className={classes["case-study-main-head__filter-wrapper"]}>
            <CaseStudiesFilters
              handleSort={handleSortCaseStudy}
              handleByCategory={handleByCategory}
              handleByTags={handleByTags}
              color="white"
              title={{ titleService, titleSortby, tittleIndustry }}
            />
          </div>
          <div className={classes["case-study-main-content"]}>
            <CaseStudyList items={listCaseStudy} />
          </div>
        </div>
      </div>
    </section>
  );
}
