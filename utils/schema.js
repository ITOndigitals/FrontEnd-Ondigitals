import { GetDataSchema } from "@/pages/api/graphql";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";

const inLanguage = {
  vi: "vi-VN",
  en: "en-US",
  ja: "ja-JP",
  kr: "ko-KR",
  zh: "zh-CN",
};

export default function SchemaODS({ type }) {
  const router = useRouter();
  const [data, setData] = useState(null);
  const typeData = type ? type : "pageBy"; // lấy theo slug loại là page hay post hay là case study....
  const url = useMemo(() => {
    if (!router.isReady) return ""; // Chờ cho đến khi router sẵn sàng
    return router.locale === "en"
      ? `https://ondigitals.com${router.asPath}`
      : `https://ondigitals.com/${router.locale}${router.asPath}`;
  }, [router.locale, router.asPath, router.isReady]);

  const getSchema = async () => {
    if (router.isReady) {
      // Chỉ gọi API khi router đã sẵn sàng
      const slug = decodeURIComponent(router.asPath);
      const fetchedData = await GetDataSchema(typeData, slug); // lấy theo slug loại là page hay post hay là case study....
      setData(fetchedData);
    }
  };

  useEffect(() => {
    getSchema();
  }, [router.isReady, router.asPath]); // Chỉ gọi lại khi router.isReady hoặc router.asPath thay đổi

  if (!data) {
    return null;
  }
  const { title, description, focusKeywords } = data[typeData]?.seo || null;
  const keywords = focusKeywords && focusKeywords.length > 0 ? focusKeywords[0] : "On Digitals";
  return (
    <Head>
      <script type="application/ld+json" className="rank-math-schema">
        {`{
        "@context": "https://schema.org",
        "@graph": [
            {
            "@type": "Organization",
            "@id": "https://ondigitals.com/#organization",
            "name": "Ondigitals"
            },
            {
            "@type": "WebSite",
            "@id": "https://ondigitals.com/#website",
            "url": "https://ondigitals.com",
            "name": "Ondigitals",
            "publisher": {
                "@id": "https://ondigitals.com/#organization"
            },
            "inLanguage": "${inLanguage[router.locale]}"
            },
            {
            "@type": "WebPage",
            "@id": "${url}#webpage",
            "url": "${url}",
            "name": "${title}",
            "datePublished": "2023-10-02T05:21:23+07:00",
            "dateModified": "2024-04-05T03:28:29+07:00",
            "isPartOf": {
                "@id": "https://ondigitals.com/#website"
            },
            "inLanguage": "${inLanguage[router.locale]}"
            },
            {
            "@type": "Person",
            "@id": "https://api.ondigitals.com/",
            "name": "webadmin",
            "url": "https://ondigitals.com/",
            "image": {
                "@type": "ImageObject",
                "@id": "https://secure.gravatar.com/avatar/618b246dc0fc6c2f83a393f732c412fa?s=96&d=mm&r=g",
                "url": "https://secure.gravatar.com/avatar/618b246dc0fc6c2f83a393f732c412fa?s=96&d=mm&r=g",
                "caption": "webadmin",
                "inLanguage": "${inLanguage[router.locale]}"
            },
            "sameAs": [
                "http://ondigitals.com"
            ],
            "worksFor": {
                "@id": "https://ondigitals.com/#organization"
            }
            },
            {
            "@type": "Article",
            "headline": "${title}",
            "keywords": "${keywords}",
            "datePublished": "2023-10-02T05:21:23+07:00",
            "dateModified": "2024-04-05T03:28:29+07:00",
            "author": {
                "@id": "https://ondigitals.com/",
                "name": "Anh Vu"
            },
            "publisher": {
                "@id": "https://ondigitals.com/#organization"
            },
            "description": "${description}",
            "name": "${title}",
            "@id": "${url}#richSnippet",
            "isPartOf": {
                "@id": "${url}#webpage"
            },
            "inLanguage": "${inLanguage[router.locale]}",
            "mainEntityOfPage": {
                "@id": "${url}#webpage"
            }
            }
        ]
    }`}
      </script>
    </Head>
  );
}
