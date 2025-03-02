import Head from "next/head";

const HreflangTags = ({ translations, currentUri, locale }) => {
  const baseUrl = "https://ondigitals.com";
  const languageMap = { EN: "en", ZH: "zh", JP: "ja", KR: "ko", VI: "vi" };

  const currentLang = languageMap[locale.toUpperCase()] || locale.toLowerCase();
  const langPrefix = currentLang === "en" ? "" : `/${currentLang}`;
  const adjustedCurrentUri = `${langPrefix}${currentUri.replace(
    /^\/[a-z]{2}\//,
    "/"
  )}`;

  const hreflangTags = [
    { hrefLang: currentLang, href: `${baseUrl}${adjustedCurrentUri}` },
    ...translations.map((trans) => ({
      hrefLang:
        languageMap[trans.language.code] || trans.language.code.toLowerCase(),
      href: `${baseUrl}${trans.uri}`,
    })),
    {
      hrefLang: "x-default",
      href: `${baseUrl}${
        translations.find((t) => t.language.code === "EN")?.uri ||
        adjustedCurrentUri
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
