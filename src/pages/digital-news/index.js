import React, { useEffect } from "react";
import BlogPage from "@/components/blogpage/BlogPage";
import {
  GetListSlugPosts,
  GetSeoAndContentBlogPage,
  getDataPageBlog,
} from "../api/graphql";
import Head from "next/head";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import {
  getDataMenu,
  getTranslatedDataFooter,
} from "../api/graphqlHeaderFooter";
import { useRouter } from "next/router";
import {
  getLanguagePathBlog,
  languagePathsBlog,
} from "../../../utils/languageSlug";
import replaceUrlsHead from "../../../utils/replaceUrlsHead";
import ListUrlAllPosts from "../../../utils/listUrlAllPosts";
import SchemaODS from "../../../utils/schema";

const parse = require("html-react-parser");

export default function Blog({
  allPosts,
  seoHead,
  dataFooter,
  dataHeader,
  allPostsPaths,
}) {
  const router = useRouter();
  const { locale } = router;
  const basePath = getLanguagePathBlog(locale);
  useEffect(() => {
    if (["zh", "jp", "kr"].includes(locale)) {
      window.location.href = `/${locale}`;
    }

    if (locale in languagePathsBlog) {
      router.push(basePath);
    }
  }, [locale]);
  const dataHead = replaceUrlsHead(seoHead?.seo?.fullHead);
  return (
    <>
      <Head>{dataHead && parse(dataHead)}</Head>
      <SchemaODS/>
      <Header data={dataHeader} />
      <h1 style={{ display: "none" }}>{seoHead?.seo?.title}</h1>
      <BlogPage blogsData={allPosts} textContent={seoHead} />
      {locale === "en" && <ListUrlAllPosts data={allPostsPaths} />}
      <Footer data={dataFooter} />
    </>
  );
}

export const getServerSideProps = async ({ locale }) => {
  const language = locale.toUpperCase();
  const idPage = 45359;
  const allPostsPaths = [];
  let hasNextPage = true;
  let after = "";
  const [allPosts, dataSeo, dataHeader] = await Promise.all([
    getDataPageBlog(language, 12, null, null, null),
    GetSeoAndContentBlogPage(idPage),
    getDataMenu(language),
  ]);

  const translation = dataSeo?.translations?.find(
    (t) => t.language.code === language
  );
  const seoHead = translation
    ? await GetSeoAndContentBlogPage(translation.pageId)
    : dataSeo;
  const dataFooter = await getTranslatedDataFooter(language);

  while (hasNextPage) {
    const posts = await GetListSlugPosts(after);
    const pathsPost = posts.nodes.map((post) => ({
      params: {
        slug: post.slug,
      },
      locale: post.language.code.toLowerCase(),
    }));
    allPostsPaths.push(...pathsPost);
    hasNextPage = posts.pageInfo?.hasNextPage;
    after = hasNextPage ? posts.pageInfo?.endCursor : "";
  }
  return {
    props: {
      allPosts,
      seoHead,
      dataFooter,
      dataHeader,
      allPostsPaths,
    },
  };
};
