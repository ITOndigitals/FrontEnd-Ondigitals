import { useBoundStore } from "@/store/useBoundStore";
import classes from "./BlogDetail.module.scss";
import { useEffect, useState } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import ButtonNoBorder from "../ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "../ui/Icons/TopRightArrow";
import ReadMoreSlider from "./components/ReadMoreSlider/ReadMoreSlider";
import PostDetail from "./components/postdetail/PostDetail";
import { Maven_Pro } from "next/font/google";
import TableOfContent from "./components/TableOfContent/TableOfContent";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const BlogDetail = ({ relatedPosts, postDetail }) => {
  const { postBy, allBlogsContent } = postDetail;
  const titlePostDetail = {
    title: postBy.title,
    url: postBy.slug,
  };
  const {
    breadcrumTitleBlogDetail,
    breadcrumHome,
    breadcrumPage,
    breadcrumPageDetail,
    textButton,
    textReadMore
  } = allBlogsContent.nodes[0].textBlogandBlogDetail || null;
  const DUMMY_BREADCRUMB_DATA = [
    breadcrumHome,
    breadcrumPage,
    breadcrumPageDetail,
    titlePostDetail,
  ];

  const [markdown, setMarkdown] = useState();
  const headerIsDark = useBoundStore((state) => state.isDark);
  const setToDark = useBoundStore((state) => state.setToDark);
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );
  const setChangeStickyIsAllowed = useBoundStore(
    (state) => state.setChangeStickyIsAllowed
  );
  const setIsInSubPageState = useBoundStore(
    (state) => state.setIsInSubPageState
  );
  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
    setIsInSubPageState(true);
    const header = document.querySelector(".main-header-g");
    if (header) {
      header.classList.remove("hide");
    }
    setHeaderCanChangeColor();
    setToDark();
  }, [headerIsDark]);

  const applyMarkDownHandler = (markdownData) => {
    setMarkdown(markdownData);
  };

  return (
    <div className={classes["blog-detail"]}>
      <div className="container">
        <p className={classes["blog-detail-header"]}>
          {breadcrumTitleBlogDetail}
        </p>
        <div className={classes["blog-detail-breadcrumbs"]}>
          <Breadcrumb data={DUMMY_BREADCRUMB_DATA} />
        </div>
        <section className={classes["blog-detail-content"]}>
          <div className={classes["blog-detail-content__toc"]}>
            {markdown && <TableOfContent markdown={markdown} />}
          </div>
          <div className={classes["blog-detail-content__spacer"]}></div>
          <div className={classes["blog-detail-content__main"]}>
            <PostDetail data={postBy} applyMarkDown={applyMarkDownHandler} />
          </div>
        </section>
        <section className={classes["blog-detail-read-more"]}>
          <div className={classes["blog-detail-read-more__heading"]}>
            <p className={classes["blog-detail-read-more__heading-content"]}>
              {textReadMore}
            </p>
            <ButtonNoBorder
              href="#"
              textSize="md"
              RightIcon={
                <TopRightArrow width={24} height={24} color="#131114" />
              }
            >
              {textButton}
            </ButtonNoBorder>
          </div>
          <ReadMoreSlider data={relatedPosts} />
        </section>
      </div>
      <NeedHelpDigitalGrowth />
    </div>
  );
};
export default BlogDetail;
