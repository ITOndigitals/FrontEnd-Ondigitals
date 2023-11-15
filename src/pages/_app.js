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
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
