import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/logo-large.jpg" />

          <title>Felipe Menezes</title>

          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content="https://felipedeveloper.vercel.app/" />
          <meta property="og:title" content="Felipe Menezes" />
          <meta property="og:site_name" content="Website/portfolio" />
          <meta property="og:description" content="Software engineer, JavaScript enthusiast. Passionate about clean code, usability and UX." />
          <meta property="og:image" content="/logo-large.jpg" />
          <meta property="og:image:type" content="image/jpg" />
          {/* <meta property="og:image:width" content="150" />
          <meta property="og:image:height" content="150" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
