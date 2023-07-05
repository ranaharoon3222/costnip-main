import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // const isWindow = () => {
  //   if (typeof window !== undefined) {
  //     return window.botpressWebChat.init({
  //       composerPlaceholder: 'Chat with bot',
  //       botConversationDescription:
  //         'This chatbot was built surprisingly fast with Botpress',
  //       botId: 'dcd69f5a-39ef-4c66-874e-afebca5e3c1e',
  //       hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
  //       messagingUrl: 'https://messaging.botpress.cloud',
  //       clientId: 'dcd69f5a-39ef-4c66-874e-afebca5e3c1e',
  //     });
  //   }
  // };

  return (
    <Html lang='en'>
      <Head>
        <script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
