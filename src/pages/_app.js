import '@/styles/globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import { SWRConfig } from 'swr';
import { StoreProvider } from 'easy-peasy';
import { store } from '@/store/store';
import MobileTabs from '@/components/mobileTabs';

import { useEffect } from 'react';

export default function App({ Component, ...pageProps }) {
  const baseUrl = process.env.NEXT_PUBLIC_API;
  const isWindow = () => {
    if (typeof window !== undefined) {
      setTimeout(() => {
        return window.botpressWebChat.init({
          composerPlaceholder: 'Chat with bot',
          botConversationDescription:
            'This chatbot was built surprisingly fast with Botpress',
          botId: 'dcd69f5a-39ef-4c66-874e-afebca5e3c1e',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: 'dcd69f5a-39ef-4c66-874e-afebca5e3c1e',
        });
      }, 2000);
    }
  };

  useEffect(() => {
    isWindow();
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <SWRConfig
          value={{
            refreshInterval: 3000,
            fetcher: (resource, init) =>
              fetch(`${baseUrl}${resource}`, init).then((res) => res.json()),
          }}
        >
          <Navbar />

          <MobileTabs />

          <Component {...pageProps} />
          <Footer />
        </SWRConfig>{' '}
      </StoreProvider>
    </>
  );
}
