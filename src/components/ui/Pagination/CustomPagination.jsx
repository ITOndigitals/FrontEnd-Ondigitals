import {
  Pagination,
  getLastPage,
  getVisibleResultsMax,
  getVisibleResultsMin,
} from "@workday/canvas-kit-react/pagination";
import { useEffect, useState } from "react";
import classes from "./CustomPagination.module.scss";

const CustomPagination = ({ onChangePage, isLight }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageRange, setPageRange] = useState(5);
  const resultCount = 10;
  const totalCount = 100;
  const lastPage = getLastPage(resultCount, totalCount);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 360) {
        setPageRange(3);
      } else {
        setPageRange(5);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeStateClass = isLight ? classes["active--light"] : classes.active;

  return (
    <Pagination
      onPageChange={(pageNumber) => {
        setCurrentPageNumber(pageNumber);
        onChangePage(pageNumber);
      }}
      aria-label="Pagination"
      lastPage={lastPage}
      className={!isLight ? "custom-pagination" : "custom-pagination--l"}
      rangeSize={pageRange}
    >
      <Pagination.Controls>
        <Pagination.JumpToFirstButton aria-label="First" />
        <Pagination.StepToPreviousButton
          aria-label="Previous"
          className={classes["step-btn"]}
        />
        <Pagination.PageList>
          {({ state }) =>
            state.range.map((pageNumber) => (
              <Pagination.PageListItem key={pageNumber}>
                <Pagination.PageButton
                  className={
                    pageNumber === currentPageNumber ? activeStateClass : ""
                  }
                  aria-label={`Page ${pageNumber}`}
                  pageNumber={pageNumber}
                />
              </Pagination.PageListItem>
            ))
          }
        </Pagination.PageList>
        <Pagination.StepToNextButton
          aria-label="Next"
          className={classes["step-btn"]}
        />
        <Pagination.JumpToLastButton aria-label="Last" />
      </Pagination.Controls>
      <Pagination.AdditionalDetails shouldHideDetails>
        {({ state }) =>
          `${getVisibleResultsMin(
            state.currentPage,
            resultCount
          )}-${getVisibleResultsMax(
            state.currentPage,
            resultCount,
            totalCount
          )} of ${totalCount} results`
        }
      </Pagination.AdditionalDetails>
    </Pagination>
  );
};

export default CustomPagination;
