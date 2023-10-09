import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const fixelFont = localFont({ src: "../fonts/FixelVariable.ttf" });
config.autoAddCss = false;
const client = new ApolloClient({
  uri: "https://api.ondigitals.com/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Layout className={fixelFont.className}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}
