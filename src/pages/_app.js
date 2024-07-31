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
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <ApolloProvider client={client}>
          <Layout className={selectedFont}>
            <Head>
              <link rel="preconnect" href="https://www.googletagmanager.com" />
              <link rel="preconnect" href="https://www.google-analytics.com" />
              <script
                src="https://www.google.com/recaptcha/api.js?render=explicit"
                async
                defer
              ></script>
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
              <script
                async
                defer
                src="https://www.googletagmanager.com/gtag/js?id=G-H7T16R0SB2"
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-H7T16R0SB2');
    `,
                }}
              />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GoogleReCaptchaProvider>
    </>
  );
}
