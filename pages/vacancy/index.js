import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import NavHeader from "@/components/NavigationHeader";
import SwipeUpButton from "@/components/SwipeUpBtn";
import Vacancies from "@/components/Vacancies";
import MainHeader from "@/components/mainHeader";
import { getVacancyInfo } from "@/services/vacancyInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useTeam } from "@/shared/contexts/TeamContext";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let vacancyInfo = null;

  try {
    vacancyInfo = await getVacancyInfo(lang);
  } catch (error) {
    console.error("Error fetching vacancy info:", error);
  }

  return {
    props: {
      vacancyInfo: vacancyInfo || [],
      initialLang: lang,
    },
  };
}

function VacancyPage({ vacancyInfo, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(vacancyInfo);
  const { teamData } = useTeam();

  useEffect(() => {
    const fetchVacancyInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getVacancyInfo(savedLang);
      setData(newData);
    };

    fetchVacancyInfo();
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
      <Vacancies vacancyInfo={data} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default VacancyPage;
