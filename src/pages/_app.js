import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import localFont from "next/font/local";
const fixelFont = localFont({ src: "../fonts/FixelVariable.ttf" });

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout className={fixelFont.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
