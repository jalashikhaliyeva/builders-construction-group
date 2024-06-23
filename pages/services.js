import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import ServicesPageBoxes from "@/components/ServicesPageBoxes";
import SwipeUpButton from "@/components/SwipeUpBtn";
import dynamic from "next/dynamic";
import { getServicesInfo } from "@/services/servicesInfo";
import Head from "next/head";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let servicesInfo = null;

  try {
    servicesInfo = await getServicesInfo(lang);
  } catch (error) {
    console.error("Error fetching services info:", error);
  }

  return {
    props: {
      servicesInfo: servicesInfo || { services: [] },
      initialLang: lang,
    },
  };
}

function Services({ servicesInfo, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(servicesInfo);

  useEffect(() => {
    const fetchServicesInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getServicesInfo(savedLang);
      setData(newData);
    };

    fetchServicesInfo();
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
      <ServicesPageBoxes servicesInfo={data} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Services;
