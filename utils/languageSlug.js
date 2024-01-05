export const localeLang = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文(简体)",
};
export const languagePathsService = {
  en: "/services",
  vi: "/vi/dich-vu",
};
export const languagePathsBlog = {
  en: "/digital-news",
  vi: "/vi/tin-tuc",
};
export const getLanguagePathService = (locale) => {
  return languagePathsService[locale] || "/services";
};
export const getLanguagePathBlog= (locale) => {
  return languagePathsBlog[locale] || "/digital-news";
};
