export const getLanguagePathService = (locale) => {
  const languagePaths = {
    en: "/services",
    vi: "/dich-vu",
  };
  return languagePaths[locale] || "/services";
};
export const getLanguagePathBlog = (locale) => {
  const languagePaths = {
    en: "/digital-news",
    vi: "/tin-tuc",
  };
  return languagePaths[locale] || "/digital-news";
};
