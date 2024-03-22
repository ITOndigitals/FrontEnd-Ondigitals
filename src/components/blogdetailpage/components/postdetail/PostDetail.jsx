import { useEffect, useRef } from "react";
import classes from "./postdetail.module.scss";
import Tag from "@/components/ui/Tag/Tag";
import Image from "next/image";
import DateAndViews from "@/components/ui/DateAndViews/DateAndViews";
import { Maven_Pro } from "next/font/google";
import ButtonNoBorder from "@/components/ui/Buttons/ButtonNoBorder/ButtonNoBorder";
import { IconChevronLeft, UpNavIcon } from "@/components/ui/Icons/ListIcon";
import { useRouter } from "next/router";
import { getLanguagePathBlog } from "../../../../../utils/languageSlug";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
const parse = require("html-react-parser");

export default function PostDetail({ data, applyMarkDown, textBtn }) {
  if (!data) {
    return <div>Loading...</div>;
  }
  const post = data;
  const router = useRouter();
  const currentLanguage = router.locale.toUpperCase();
  const tagCategory = data?.categories?.nodes;
  const idPost = post?.postId;
  const viewPost = (idPost % 41) + 10;
  const basePath = getLanguagePathBlog(router.locale);
  const matchingTranslation = data.translations.find(
    (translation) => translation.language.code === currentLanguage
  );
  useEffect(() => {
    if (matchingTranslation) {
      router.push(matchingTranslation.slug);
    } else if (router.locale !== post.language.slug) {
      window.location.href = "/";
    }
  }, [router.locale, data.translations]);

  const postDetailRef = useRef(null);
  const handleScrollToTop = () => {
    if (postDetailRef.current) {
      const offsetTop = postDetailRef.current.offsetTop;
      window.scrollTo({ top: offsetTop - 75, behavior: "smooth" });
    }
  };
  // console.log(
  //   parse(post.content).findIndex((item) => item === "[divider height=”30″]")
  // );
  //useEffect sau là khâu chuẩn bị dữ liệu cho Table Of Content
  useEffect(() => {
    let markdown = [];
    const headingElements = document.querySelectorAll("h2, h3, h4");
    if (headingElements.length > 0) {
      let currentLevel = 1;
      let subLevel = 1;
      let innerSubLevel = 1;
      for (let i = 0; i < headingElements.length; i++) {
        const headingElement = headingElements[i];
        const headingContent = headingElement.textContent
          .trim()
          .replace(/\d+\./g, "");
        let level;
        if (headingElement.tagName === "H2") {
          level = 2;
        } else if (headingElement.tagName === "H3") {
          level = 3;
        } else if (headingElement.tagName === "H4") {
          level = 4;
        }

        if (headingContent !== "") {
          const headingId = "heading-" + i;
          headingElement.id = headingId;
          let numbering = 1;

          if (level === 2 && i > 0) {
            currentLevel++;
            numbering = currentLevel;
            subLevel = 1;
          }
          if (level === 3) {
            numbering = currentLevel + `.${subLevel}`;
            const headingItem = headingElements[i + 1];
            if (headingItem && headingItem.tagName === "H3") {
              subLevel++;
            }
            innerSubLevel = 1;
          }
          if (level === 4) {
            numbering = currentLevel + `.${subLevel}` + `.${innerSubLevel}`;
            innerSubLevel++;
            const headingItem = headingElements[i + 1];
            if (headingItem && headingItem.tagName === "H3") {
              subLevel++;
            }
          }
          markdown.push({
            content: numbering + ". " + headingContent,
            href: "#" + headingId,
            level: level - 1,
          });
        }
      }
      applyMarkDown(markdown);
    } else applyMarkDown([]);
  }, [data]);
  //thêm rel nofollow cho các link ngoài của ondigitals
  const addNofollowToExternalLinks = (node) => {
    if (node.type === "tag" && node.name === "a" && node.attribs.href) {
      const href = node.attribs.href;
      if (!href.includes("ondigitals")) {
        node.attribs.rel = "nofollow";
      }
    }
    return node;
  };
  const parsedContent = parse(post.content, {
    replace: addNofollowToExternalLinks,
  });
  return (
    <div ref={postDetailRef} className={classes["post-detail-container"]}>
      <div className={classes["post-detail-content"]} key={post.postId}>
        <h1 className={classes["title-post-detail"]}>{post.title}</h1>
        <div className={classes["day-and-tag-post-detail"]}>
          <div className={classes["tag-post-detail"]}>
            {tagCategory &&
              tagCategory.map((item, index) => (
                <Tag
                  key={index}
                  name={item.name}
                  href={item.slug}
                  backgroundColor={item.description}
                />
              ))}
          </div>
          <div>
            <DateAndViews createDate={post.date} views={viewPost} />
          </div>
        </div>

        <div
          style={{ fontFamily: MavenPro.style.fontFamily }}
          className={classes["content-post"]}
        >
          {post.content && parsedContent}
        </div>
        <div className={classes["post-detail-footer"]}>
          <hr />
          <div className={classes["post-detail-footer-button"]}>
            <div className={classes["post-detail-footer-button__back"]}>
              <ButtonNoBorder
                href={basePath}
                textSize="md"
                LeftIcon={
                  <IconChevronLeft width={24} height={24} color="#131114" />
                }
              >
                {textBtn}
              </ButtonNoBorder>
            </div>
            <div
              onClick={handleScrollToTop}
              className={classes["post-detail-footer-button__icon-to-top"]}
            >
              <UpNavIcon width={24} height={24} color="#131114" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
