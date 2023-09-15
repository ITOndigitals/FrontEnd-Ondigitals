import { useBoundStore } from "@/store/useBoundStore";
import classes from "./BlogDetail.module.scss";
import { useEffect, useState } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import ButtonNoBorder from "../ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import TopRightArrow from "../ui/Icons/TopRightArrow";
import ReadMoreSlider from "./components/ReadMoreSlider/ReadMoreSlider";
import PostDetail from "./components/postdetail/PostDetail";
import { Maven_Pro } from "next/font/google";
import Button from "../ui/Buttons/Button/Button";
import { ArrowRight } from "../ui/Icons/ListIcon";
import TableOfContent from "./components/TableOfContent/TableOfContent";

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const DUMMY_BREADCRUMB_DATA = [
  {
    id: 1,
    link: "#",
    title: "Home",
  },
  {
    id: 2,
    link: "#",
    title: "News & Insights",
  },
  {
    id: 3,
    link: "#",
    title: "Insights",
  },
  {
    id: 4,
    link: "#",
    title: "Best SEO Strategies: 10 steps to reach your target a",
  },
];

const BlogDetail = ({ relatedPosts, postDetail }) => {
  const [markdown, setMarkdown] = useState();
  const headerIsDark = useBoundStore((state) => state.isDark);
  const setToDark = useBoundStore((state) => state.setToDark);
  const setHeaderCanNotChangeColor = useBoundStore(
    (state) => state.setHeaderCanNotChangeColor
  );

  useEffect(() => {
    if (!headerIsDark) {
      setToDark();
    } else {
      setHeaderCanNotChangeColor();
    }
  }, [headerIsDark]);

  const applyMarkDownHandler = (markdownData) => {
    setMarkdown(markdownData);
  };

  return (
    <div className={classes["blog-detail"]}>
      <div className="container">
        <p className={classes["blog-detail-header"]}>Insights</p>
        <div className={classes["blog-detail-breadcrumbs"]}>
          <Breadcrumb data={DUMMY_BREADCRUMB_DATA} />
        </div>
        <section className={classes["blog-detail-content"]}>
          <div className={classes["blog-detail-content__toc"]}>
            {markdown && <TableOfContent markdown={markdown}/>}
          </div>
          <div className={classes["blog-detail-content__spacer"]}></div>
          <div className={classes["blog-detail-content__main"]}>
            <PostDetail
              data={postDetail}
              applyMarkDown={applyMarkDownHandler}
            />
          </div>
        </section>
        <section className={classes["blog-detail-read-more"]}>
          <div className={classes["blog-detail-read-more__heading"]}>
            <p className={classes["blog-detail-read-more__heading-content"]}>
              Read more
            </p>
            <ButtonNoBorder
              href="#"
              textSize="md"
              RightIcon={
                <TopRightArrow width={24} height={24} color="#131114" />
              }
            >
              VIEW ALL
            </ButtonNoBorder>
          </div>
          <ReadMoreSlider data={relatedPosts} />
        </section>
      </div>
      <section className={classes["blog-detail-contact-banner"]}>
        <div className="container">
          <div className={classes["blog-detail-contact-banner-wrapper"]}>
            <p className={classes["blog-detail-contact-banner-heading"]}>
              NEED HELP <br /> with digital growth?
            </p>
            <p
              className={classes["blog-detail-contact-banner-desc"]}
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              Tell us about your business challenge and let's discuss together
            </p>
            <Button
              href="#"
              className="btn-contact-form"
              RightIcon={<ArrowRight width={24} height={24} color="#FFF" />}
            >
              Send us a message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
