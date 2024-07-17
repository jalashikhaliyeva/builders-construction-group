import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import NavHeader from "@/components/NavigationHeader";
import NewsTitleSection from "@/components/NewsTitleSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import NewsCards from "@/components/newsCardsSect";
import { getNewsInfo } from "@/services/newsInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let newsInfo = null;

  try {
    newsInfo = await getNewsInfo(lang);
  } catch (error) {
    console.error("Error fetching news info:", error);
  }

  return {
    props: {
      newsInfo: newsInfo || [],
      initialLang: lang,
    },
  };
}

function News({ newsInfo, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(newsInfo);

  useEffect(() => {
    const fetchNewsInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getNewsInfo(savedLang);
      setData(newData);
    };

    fetchNewsInfo();
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

  const metaTags = data.meta_tag || {};

  return (
    <>
      <Head>
        <title>{metaTags.meta_title}</title>
        <meta name="description" content={metaTags.meta_description} />
        <meta name="keywords" content={metaTags.meta_keywords} />
      </Head>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      {/* <NewsTitleSection newsInfo={data} /> */}
      <NewsCards newsInfo={data} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default News;
