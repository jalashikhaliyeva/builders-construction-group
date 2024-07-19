import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderHome from "@/components/Header";
import VideoContainer from "@/components/VideoContainer";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import Section2Home from "@/components/Section2Home";
// import BlueSectionHome from "@/components/BlueSectionHome";
const BlueSectionHome = dynamic(() => import("@/components/BlueSectionHome"), {
  ssr: false,
});
import ProjectsHome from "@/components/ProjectsHome";
import ServicesHome from "@/components/ServicesHome";
import NewsSectionHome from "@/components/NewsSectionHome";
import ConnectWithUs from "@/components/ConnectWithUsHome";
// import Footer from "@/components/Footer";
import SwipeUpButton from "@/components/SwipeUpBtn";
const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import { getHomeInfo } from "@/services/homeInfo";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useTeam } from "@/shared/contexts/TeamContext";

const options = {
  loop: true,
};

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
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
  const { teamData } = useTeam();

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
  const metaTags = data?.meta_tag || {};
  const staticNewsImg = data?.static_images?.news;
  const staticEquipmentImg = data?.static_images?.equipment;
  return (
    <main>
      <Head>
        <meta property="og:title" content={metaTags.meta_title} />
        <meta property="og:description" content={metaTags.meta_description} />
        <meta property="og:type" content="website" />
        <title>{metaTags.meta_title}</title>
        <meta name="description" content={metaTags.meta_description} />
        <meta name="keywords" content={metaTags.meta_keywords} />
      </Head>
      <HeaderHome  teamInfo={teamData}/>
      <br />
      <VideoContainer homeInfo={data} />

      <EmblaCarousel
        slides={data?.partner?.map((partner) => partner?.image)}
        options={options}
        imageClassName="firstCarousel__image"
      />
      <Section2Home homeInfo={data} />
      <BlueSectionHome
        homeInfo={homeInfo}
        staticEquipmentImg={staticEquipmentImg}
      />
      <ProjectsHome homeInfo={data} />
      <NewsSectionHome homeInfo={data} staticNewsImg={staticNewsImg} />
      <ConnectWithUs contactImageURL={contactImageURL} />
      <EmblaCarousel
        slides={data?.gallery?.map((slide) => slide?.image)}
        options={options}
        imageClassName="secondCarousel__image"
      />
      <SwipeUpButton />
      <MyFooter />
    </main>
  );
}
