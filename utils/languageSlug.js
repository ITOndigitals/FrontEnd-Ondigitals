export const getLanguagePathService = (locale) => {
  const languagePaths = {
    en: "/services",
    vi: "/services",
  };
  return languagePaths[locale] || "/services";
};
export const getLanguagePathBlog = (locale) => {
  const languagePaths = {
    en: "/digital-news",
    vi: "/digital-news",
  };
  return languagePaths[locale] || "/digital-news";
};
