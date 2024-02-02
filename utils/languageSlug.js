export const localeLang = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文(简体)",
  jp: "한국어",
  kr: "日本語",
};
export const languagePathsService = {
  en: "/services",
  vi: "/vi/dich-vu",
};
export const languagePathsBlog = {
  en: "/digital-news",
  vi: "/vi/tin-tuc",
};
export const languagePathsContact = {
  en: "/contact",
  vi: "/vi/lien-he",
};
export const languagePathsAboutUs = {
  en: "/about-us",
  vi: "/vi/ve-chung-toi",
};
export const getLanguagePathService = (locale) => {
  return languagePathsService[locale] || "/services";
};
export const getLanguagePathBlog = (locale) => {
  return languagePathsBlog[locale] || "/digital-news";
};
export const getLanguagePathContact = (locale) => {
  return languagePathsContact[locale] || "/contact";
};

export const getLanguagePathAboutUs = (locale) => {
  return languagePathsAboutUs[locale] || "/about-us";
};

export const slugServicesMenuMobile = {
  vi: {
    databaseId: 1,
    name: "All Service",
    slug: "services",
  },
  en: {
    databaseId: 2,
    name: "Tất cả dịch vụ",
    slug: "/vi/dich-vu",
  },
};
