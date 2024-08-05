import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import usePageLoading from "@/hooks/usePageLoading";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";
import { langHtml } from "../../utils/languageSlug";
import { Maven_Pro, Noto_Sans_SC } from "next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "@/configurations/recaptcha";
import { GoogleTagManager } from "@next/third-parties/google";

const fixelFont = localFont({
  src: "../fonts/FixelVariable.ttf",
  display: "swap",
});
const notoSans = Noto_Sans_SC({ subsets: ["latin"] });

const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

config.autoAddCss = false;
const client = new ApolloClient({
  uri: "https://api.ondigitals.com/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  const isLoading = usePageLoading();
  const { locale } = useRouter();
  const selectedFont =
    locale === "vi"
      ? MavenPro.className
      : locale === "zh"
      ? notoSans.className
      : fixelFont.className;

  const router = useRouter();
  useEffect(() => {
    const handleLanguageChange = () => {
      document.documentElement.lang = langHtml[locale];
    };
    router.events.on("routeChangeComplete", handleLanguageChange);
    return () => {
      router.events.off("routeChangeComplete", handleLanguageChange);
    };
  }, [router]);
  return (
    <>
      {isLoading && <LoadingSpinner hasOverlay />}
      <ApolloProvider client={client}>
        <Layout className={selectedFont}>
          <Head>
            <meta name="geo.region" content="VN-SG" />
            <meta name="geo.placename" content="Ho Chi Minh" />
            <meta
              name="geo.position"
              content="10.763109429425983;106.69381408995902"
            />
            <meta
              name="ICBM"
              content="10.763109429425983, 106.69381408995902"
            />
            <link
              rel="preconnect"
              href="https://www.google.com"
              crossorigin
            ></link>

            <link rel="dns-prefetch" href="https://www.google.com"></link>
          </Head>
          <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
            <Component {...pageProps} />
          </GoogleReCaptchaProvider>
          <GoogleTagManager gtmId="G-H7T16R0SB2" />
        </Layout>
      </ApolloProvider>
    </>
  );
}
