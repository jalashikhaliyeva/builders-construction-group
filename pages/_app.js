// _app.js
import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../components/Swiper/base.css";
import { useEffect, useState } from "react";
import { ChakraProvider, Spinner, Box } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import i18n from "../locales/i18n";
import Head from "next/head";
import { TeamProvider } from "@/shared/contexts/TeamContext";


function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
    AOS.refresh();

    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  useEffect(() => {
    const { locale } = router;
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [router.locale]);

  return (
    <ChakraProvider>
      <Head>
        <link rel="icon" href="/logoContent.png" />
      </Head>
      {loading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(255, 255, 255, 1)"
          zIndex="9999"
        >
          <Spinner size="xl" />
        </Box>
      )}
      <TeamProvider>
        <Component {...pageProps} />
      </TeamProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
