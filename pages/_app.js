import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { LocationProvider } from "@/components/LocationContext";

export default function App({ Component, pageProps }) {
  return (
    <LocationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocationProvider>
  );
}
