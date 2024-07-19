import React, { useEffect, useState } from "react";
import EquipmentsCards from "@/components/EquipmentsCards";
import EquipmentsSectionFirst from "@/components/EquipmentsSectionFirst";
const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { getEquipmentsInfo } from "@/services/equipmentsInfo";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import SwipeUpButton from "@/components/SwipeUpBtn";
import Head from "next/head";
import { useTeam } from "@/shared/contexts/TeamContext";

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let equipmentsInfo = null;

  try {
    equipmentsInfo = await getEquipmentsInfo(lang);
  } catch (error) {
    console.error("Error fetching equipments info:", error);
  }

  return {
    props: {
      equipmentsInfo: equipmentsInfo || { equipments: [] },
      initialLang: lang,
    },
  };
}

function Equipments({ equipmentsInfo, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(equipmentsInfo);
  const { teamData } = useTeam();
  useEffect(() => {
    const fetchEquipmentsInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getEquipmentsInfo(savedLang);
      setData(newData);
    };

    fetchEquipmentsInfo();
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
      <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
      <EquipmentsSectionFirst equipmentsInfo={data} />
      <EquipmentsCards equipmentsInfo={data} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Equipments;
