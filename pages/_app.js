import "@/styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../components/Swiper/base.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
