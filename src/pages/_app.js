import "@/styles/globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { SWRConfig } from "swr";
import { StoreProvider } from "easy-peasy";
import { store } from "@/store/store";
import MobileTabs from "@/components/mobileTabs";

export default function App({ Component, ...pageProps }) {
  const baseUrl = process.env.NEXT_PUBLIC_API;

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

          <MobileTabs  />

          <Component {...pageProps} />
          <Footer />
        </SWRConfig>{" "}
      </StoreProvider>
    </>
  );
}
