import React, { useEffect, useState } from "react";
import EquipmentsCards from "@/components/EquipmentsCards";
import EquipmentsSectionFirst from "@/components/EquipmentsSectionFirst";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { getEquipmentsInfo } from "@/services/equipmentsInfo";
import { useRouter } from "next/router";

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

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <EquipmentsSectionFirst equipmentsInfo={data} />
      <EquipmentsCards equipmentsInfo={data} />
      <MyFooter />
    </>
  );
}

export default Equipments;
