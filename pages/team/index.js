const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from "@/components/NavigationHeader";
import TeamMembersCards from "@/components/TeamMembersCards";
import MainHeader from "@/components/mainHeader";
import { getTeamInfo } from "@/services/leadership-teamInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let teamInfo = null;

  try {
    teamInfo = await getTeamInfo(lang);
  } catch (error) {
    console.error("Error fetching team info:", error);
  }

  return {
    props: {
      teamInfo: teamInfo || [],
      initialLang: lang,
    },
  };
}
function TeamPage({ teamInfo , initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(teamInfo);

  useEffect(() => {
    const fetchTeamInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getTeamInfo(savedLang);
      setData(newData);
    };

    fetchTeamInfo();
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
      <TeamMembersCards teamInfo={data} />
      <MyFooter />
    </>
  );
}

export default TeamPage;
