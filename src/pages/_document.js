import Document, { Html, Head, Main, NextScript } from "next/document";
import { langHtml } from "../../utils/languageSlug";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { locale } = ctx || {};
    return { ...initialProps, locale };
  }
  render() {
    const { locale } = this.props;
    return (
      <Html lang={langHtml[locale]}>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `document.documentElement.lang = '${langHtml[locale]}';`
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
