export const langHtml = {
  en: "en",
  vi: "vi",
  zh: "zh",
  jp: "ja",
  kr: "ko",
};
export const localeLang = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文(简体)",
  jp: "日本語",
  kr: "한국어",
};
export const localeLangButtonServerChild = {
  en: "Get Started Today",
  vi: "Bắt đầu ngay",
  zh: "今天开始",
  jp: "今すぐ始めましょう",
  kr: "오늘 시작하세요",
};
export const localeLangButtonCTA = {
  en: "Send us a message",
  vi: "Gửi tin nhắn",
  zh: "发信息",
  jp: "メッセージを送る",
  kr: "우리에게 메시지를 보내",
};
export const localeLangButtonBackToList = {
  en: "Back to list",
  vi: "Quay lại danh sách",
  zh: "返回目录",
  jp: "リストに戻る",
  kr: "다시 목록으로",
};
export const localeLangButtonContact = {
  en: "CONTACT US",
  vi: "LIÊN HỆ",
  zh: "联系我们",
  jp: "お問い合わせ",
  kr: "문의하기",
};
export const translateTitlePage404 = {
  en: "Lost in the digital space?",
  vi: "Lạc lối trong không gian kỹ thuật số? ",
  zh: "迷失在數位空間？",
  jp: "デジタル宇宙で迷ってしまいますか？",
  kr: "디지털 공간에서 길을 잃었나요?",
};
export const translateTextPage404 = {
  en: "No worries, let's navigate back together.",
  vi: "Đừng lo lắng, hãy cùng nhau quay lại.",
  zh: "不用擔心，讓我們一起導航回來。",
  jp: "心配しないでください、一緒に戻りましょう。",
  kr: "걱정하지 마세요. 함께 다시 탐색해 보세요.",
};
export const translateButtonPage404 = {
  en: "Back to Home",
  vi: "Trở về Trang chủ",
  zh: "回首頁",
  jp: "心配しないでください、一緒に戻りましょう。",
  kr: "ホームページに帰る",
};
export const translateMetaTitlePage404 = {
  en: "Page not found",
  vi: "Không tìm thấy trang",
  zh: "페이지를 찾을 수 없습니다",
  jp: "ページが存在いたしません。",
  kr: "找不到网页",
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
export const languagePathsDataPolicy = {
  en: "/data-policy/",
  vi: "/vi/chinh-sach-du-lieu",
  zh: "/zh/数-据-政-策/",
  jp: "/jp/データポリシー-について/",
  kr: "/kr/데이터-정책-정보/",
};
export const languagePathsCodesofEthnics = {
  en: "/codes-of-ethnics",
  vi: "/vi/quy-tac-dao-duc-trong-digital-marketing",
  zh: "/zh/数-字-营-销-道-德-准-则",
  jp: "/jp/デジタル-マーケティング-の-倫理-規定",
  kr: "/kr/디지털-마케팅-민족-코드",
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
export const getLanguagePathDataPolicy = (locale) => {
  return languagePathsDataPolicy[locale] || "/data-policy";
};
export const getLanguagePathCodesofEthnics = (locale) => {
  return languagePathsCodesofEthnics[locale] || "/codes-of-ethnics";
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
