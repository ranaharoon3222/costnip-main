import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          src='https://cdn.botpress.cloud/webchat/v0/inject.js'
        ></script>
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
