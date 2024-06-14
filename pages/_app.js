import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../components/Swiper/base.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import i18n from "../locales/i18n";

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
    AOS.refresh();
  }, []);
  useEffect(() => {
    const { locale } = router;
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [router.locale]);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default appWithTranslation(App);
