import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import usePageLoading from "@/hooks/usePageLoading";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { useRouter } from "next/router";
import { Maven_Pro } from "next/font/google";
import Head from "next/head";

const fixelFont = localFont({ src: "../fonts/FixelVariable.ttf" });
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
    locale === "vi" ? MavenPro.className : fixelFont.className;
  return (
    <>
      {isLoading && <LoadingSpinner hasOverlay />}
      <ApolloProvider client={client}>
        <Layout className={selectedFont}>
          <Head>
            <link
              rel="alternate"
              href={`https://ondigitals.com/${locale !== "en" ? locale : ""}`}
              hrefLang={locale}
            />
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
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
