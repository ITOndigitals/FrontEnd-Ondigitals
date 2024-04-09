import { useBoundStore } from "@/store/useBoundStore";
import classes from "./BlogDetail.module.scss";
import { useEffect, useState } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import ButtonNoBorder from "../ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "../ui/Icons/TopRightArrow";
import ReadMoreSlider from "./components/ReadMoreSlider/ReadMoreSlider";
import PostDetail from "./components/postdetail/PostDetail";
import TableOfContent from "./components/TableOfContent/TableOfContent";
import NeedHelpDigitalGrowth from "../ui/NeedHelpDigitalGrowth/NeedHelpDigitalGrowth";
import Link from "next/link";
import { GET_POSTS_BY_TAG } from "@/pages/api/graphqlApollo";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getLanguagePathBlog } from "../../../utils/languageSlug";
import { Maven_Pro } from "next/font/google";
const DATACTA = {
  en: {
    title: "NEED HELP with digital growth?",
    textButton: "Send us a message",
    content: "Tell us about your business challenge and let's discuss together",
    buttonColor: "#CD0404",
    backgroundColor: "#6F1AB6",
  },
  vi: {
    title: "CẦN GIÚP ĐỠ để phát triển kỹ thuật số?",
    textButton: "Gửi tin nhắn",
    content:
      "Hãy cho chúng tôi biết về thách thức kinh doanh của bạn và cùng nhau thảo luận",
    buttonColor: "#CD0404",
    backgroundColor: "#6F1AB6",
  },
};

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const BlogDetail = ({ relatedPosts, postDetail }) => {
  const { postBy, allBlogsContent } = postDetail || {};
  const { locale } = useRouter();
  const idPost = postBy?.categories?.nodes[0].categoryId;
  const {
    breadcrumTitleBlogDetail,
    breadcrumHome,
    breadcrumPage,
    textButton,
    textReadMore,
    titleTableOfContent,
    titleNewestPosts,
    textButtonBackToList,
    titleShareThisPost,
  } = allBlogsContent.nodes[0]?.textBlogandBlogDetail || {};
  const titlePostDetail = {
    title: postBy?.title,
    url: postBy?.slug,
  };
  const breadCrumHomePage = {
    title: breadcrumHome,
    url: `/${locale}`,
  };
  const breadCrumNewsPage = {
    title: breadcrumPage,
    url: getLanguagePathBlog(locale),
  };
  const DUMMY_BREADCRUMB_DATA = [
    breadCrumHomePage,
    breadCrumNewsPage,
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

  const [dataPostReadMore, setDataPostReadMore] = useState(null);
  const [filterPostsByTag, { loading, error, data }] =
    useLazyQuery(GET_POSTS_BY_TAG);

  useEffect(() => {
    filterPostsByTag({
      variables: {
        categoryId: idPost,
      },
    });
  }, [idPost]);

  useEffect(() => {
    if (data) {
      setDataPostReadMore(data?.posts?.nodes);
    }
  }, [data]);
  return (
    <div className={classes["blog-detail"]}>
      <div className="container">
        <p className={classes["blog-detail-header"]}>
          {breadcrumTitleBlogDetail || ""}
        </p>
        <div className={classes["blog-detail-breadcrumbs"]}>
          <Breadcrumb data={DUMMY_BREADCRUMB_DATA} />
        </div>
        <section className={classes["blog-detail-content"]}>
          <div className={classes["blog-detail-content__main"]}>
            <PostDetail
              data={postBy}
              applyMarkDown={applyMarkDownHandler}
              textBtn={textButtonBackToList}
            />
          </div>
          <div className={classes["blog-detail-content__toc"]}>
            <div style={{minHeight:"142px"}}>
              {markdown && (
                <TableOfContent
                  title={{ titleTableOfContent, titleShareThisPost }}
                  markdown={markdown}
                />
              )}
            </div>
            <div className={classes["blog-detail-content__toc__newest-posts"]}>
              <p
                className={
                  classes["blog-detail-content__toc__newest-posts__title"]
                }
              >
                {titleNewestPosts && titleNewestPosts}
              </p>
              <ul
                style={{ fontFamily: MavenPro.style.fontFamily }}
                className={
                  classes["blog-detail-content__toc__newest-posts__list"]
                }
              >
                {relatedPosts &&
                  relatedPosts.slice(0, 5).map((item) => (
                    <Link key={item.id} href={item.slug}>
                      <li>{item.title}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className={classes["blog-detail-read-more"]}>
        <div className="container">
          <div className={classes["blog-detail-read-more__heading"]}>
            <p className={classes["blog-detail-read-more__heading-content"]}>
              {textReadMore}
            </p>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className={classes["blog-detail-read-more__listPosts"]}>
              {dataPostReadMore &&
                dataPostReadMore.map((item) => (
                  <Link key={item.id} href={item.slug}>
                    <li>{item.title}</li>
                  </Link>
                ))}
            </ul>
          )}
        </div>
      </section>
      <NeedHelpDigitalGrowth data={DATACTA[locale]} />
    </div>
  );
};
export default BlogDetail;
