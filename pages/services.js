import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ROUTER } from "../shared/constant/router";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import ServicesSectionFirst from "@/components/ServicesPageSection1";
import ServicesPageBoxes from "@/components/ServicesPageBoxes";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MyFooter from "@/components/MyFooter";
import { getServicesInfo } from "@/services/servicesInfo";

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
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ServicesPageBoxes servicesInfo={data} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Services;
