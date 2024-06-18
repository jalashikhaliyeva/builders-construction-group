import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderHome from "@/components/Header";
import VideoContainer from "@/components/VideoContainer";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import Section2Home from "@/components/Section2Home";
import BlueSectionHome from "@/components/BlueSectionHome";
import ProjectsHome from "@/components/ProjectsHome";
import ServicesHome from "@/components/ServicesHome";
import NewsSectionHome from "@/components/NewsSectionHome";
import ConnectWithUs from "@/components/ConnectWithUsHome";
import Footer from "@/components/Footer";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MyFooter from "@/components/MyFooter";
import { getHomeInfo } from "@/services/homeInfo";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};

const slideCount = 11;
const slidesImg = Array.from(
  { length: slideCount },
  (_, i) => `/imageSlider/slider${i + 1}.svg`
);

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  // const { locale } = context;
  let homeInfo = null;
  try {
    homeInfo = await getHomeInfo(lang);
  } catch (error) {
    console.error("Error fetching home info:", error);
  }

  return {
    props: {
      homeInfo: homeInfo || {},
      initialLang: lang,
    },
  };
}

export default function Home({ homeInfo, initialLang }) {
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(homeInfo);

  useEffect(() => {
    const fetchHomeInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getHomeInfo(savedLang);
      setData(newData);
    };

    fetchHomeInfo();
  }, [lang, initialLang, router]);

  useEffect(() => {
    const handleRouteChange = (url, { locale }) => {
      if (locale && locale !== lang) {
        setLang(locale);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [lang, router]);

  const contactImageURL = data?.static_images?.contact;
  return (
    <main>
      <HeaderHome />
      <br />
      <VideoContainer homeInfo={data} />
      <EmblaCarousel slides={slides} options={options} />
      <Section2Home homeInfo={data} />
      <BlueSectionHome homeInfo={homeInfo} />
      <ProjectsHome homeInfo={data} />
      <NewsSectionHome homeInfo={data} />
      <ConnectWithUs contactImageURL={contactImageURL} />
      <EmblaCarousel slides={slidesImg} options={options} />
      <SwipeUpButton />
      <MyFooter />
    </main>
  );
}
