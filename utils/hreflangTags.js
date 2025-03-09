import Head from "next/head";

const HreflangTags = ({ translations, currentUri, locale }) => {
  const baseUrl = "https://ondigitals.com";

  // Một bản đồ duy nhất: { mã ngôn ngữ: [hreflang chuẩn, prefix URL] }
  const langConfig = {
    EN: ["en", ""],
    ZH: ["zh", "/zh"],
    JP: ["ja", "/jp"], // hreflang: ja, URL: /jp
    KR: ["ko", "/kr"], // hreflang: ko, URL: /kr
    VI: ["vi", "/vi"],
  };

  const currentLang = locale.toUpperCase();
  const [hrefLang, urlPrefix] = langConfig[currentLang] || [locale.toLowerCase(), `/${locale.toLowerCase()}`];
  const adjustedCurrentUri = `${urlPrefix}${currentUri.replace(/^\/[a-z]{2}\//, "/")}`;

  const hreflangTags = [
    { hrefLang, href: `${baseUrl}${adjustedCurrentUri}` }, // Trang hiện tại
    ...translations.map((trans) => {
      const transLang = trans.language.code;
      const [transHrefLang] = langConfig[transLang] || [transLang.toLowerCase()];
      return { hrefLang: transHrefLang, href: `${baseUrl}${trans.uri}` };
    }),
    {
      hrefLang: "x-default",
      href: `${baseUrl}${
        translations.find((t) => t.language.code === "EN")?.uri || adjustedCurrentUri
      }`,
    },
  ];

  return (
    <Head>
      {hreflangTags.map((tag) => (
        <link
          key={tag.href}
          rel="alternate"
          hrefLang={tag.hrefLang}
          href={tag.href}
        />
      ))}
    </Head>
  );
};

export default HreflangTags;