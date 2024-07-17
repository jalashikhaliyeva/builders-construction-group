import { useEffect, useState } from "react";
import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certificates";
import Faq from "@/components/Faq";
import dynamic from "next/dynamic";
import NavHeader from "@/components/NavigationHeader";
import ServicesHome from "@/components/ServicesHome";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { getAboutInfo } from "@/services/aboutInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useRouter } from "next/router";
import LanguageSwitcher from "@/shared/LanguageSwitcher";
import Head from "next/head";
import MissionsVision from "@/components/MissionsVision";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

const options = {
  loop: true,
};

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let aboutInfo = null;

  try {
    aboutInfo = await getAboutInfo(lang);
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      aboutInfo: aboutInfo || { certificates: [] },
      initialLang: lang,
    },
  };
}

function About({ aboutInfo, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(aboutInfo);

  useEffect(() => {
    const fetchAboutInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getAboutInfo(savedLang);
      setData(newData);
    };

    fetchAboutInfo();
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

  const metaTags = data.about || {};

  return (
    <>
      <Head>
        <title>{metaTags?.meta_title}</title>
        <meta name="description" content={metaTags?.meta_description} />
        <meta name="keywords" content={metaTags?.meta_keywords} />
      </Head>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <AboutUs aboutInfo={data} />
      <Certificates aboutInfo={data} />
      <MissionsVision aboutInfo={aboutInfo} />
      <Faq aboutInfo={data} />
      <EmblaCarousel
        slides={data?.partner?.map((partner) => partner?.image)}
        options={options}
        imageClassName="firstCarousel__image"
      />
      <ServicesHome aboutInfo={data} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default About;
