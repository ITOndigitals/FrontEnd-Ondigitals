export const localeLangButtonServerChild = {
  en: "Get Started Today",
  vi: "Bắt đầu từ hôm nay",
  zh: "今天开始",
  jp: "今すぐ始めましょう",
  kr: "오늘 시작하세요",
};
export const localeLang = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文(简体)",
  jp: "日本語",
  kr: "한국어",
};
export const languagePathsService = {
  en: "/services",
  vi: "/vi/dich-vu",
  zh: "/zh/服-务/",
  jp: "jp/%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9/",
  kr: "/kr/%ec%84%9c%eb%b9%84%ec%8a%a4/",
};
export const languagePathsBlog = {
  en: "/digital-news",
  vi: "/vi/tin-tuc",
};
export const languagePathsContact = {
  en: "/contact",
  vi: "/vi/lien-he",
  zh: "/zh/%e8%81%94%e7%b3%bb/",
  jp: "/jp/%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b/",
  kr: "/kr/%ec%97%b0%eb%9d%bd%ed%95%98%eb%8b%a4/",
};
export const languagePathsAboutUs = {
  en: "/about-us",
  vi: "/vi/ve-chung-toi",
  zh: "/zh/%e5%85%b3-%e4%ba%8e-%e6%88%91-%e4%bb%ac/",
  jp: "/jp/%e4%bc%9a%e7%a4%be%e6%a6%82%e8%a6%81/",
  kr: "/kr/%ed%9a%8c%ec%82%ac-%ec%86%8c%ea%b0%9c/",
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
  en: {
    databaseId: 1,
    name: "All Service",
    slug: "services",
  },
  vi: {
    databaseId: 2,
    name: "Tất cả dịch vụ",
    slug: "/vi/dich-vu",
  },
  zh: {
    databaseId: 3,
    name: "所有服务",
    slug: "/vi/dich-vu",
  },
  jp: {
    databaseId: 4,
    name: "すべてサービス",
    slug: "/vi/dich-vu",
  },
  kr: {
    databaseId: 5,
    name: "모든 서비스",
    slug: "/vi/dich-vu",
  },
};
