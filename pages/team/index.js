import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import NavHeader from "@/components/NavigationHeader";
import TeamMembersCards from "@/components/TeamMembersCards";
import MainHeader from "@/components/mainHeader";
import { getTeamInfo } from "@/services/leadership-teamInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import My404 from "../404";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

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

function TeamPage({ initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchTeamInfo = async () => {
      setLoading(true); // Set loading to true before fetching data
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getTeamInfo(savedLang);
      setData(newData);
      setLoading(false); // Set loading to false after data is fetched
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

  const metaTags = data.meta_tag || {};

  if (loading) {
    return <div>Loading....</div>; // Render loading indicator while data is loading
  }

  if (data?.teams?.length === 0) {
    return <My404 />;
  }

  return (
    <>
      <Head>
        <title>{metaTags.meta_title}</title>
        <meta name="description" content={metaTags.meta_description} />
        <meta name="keywords" content={metaTags.meta_keywords} />
      </Head>
      <MainHeader teamInfo={data} />
      <NavHeader pageTitle={pageTitle} />
      <TeamMembersCards teamInfo={data} />
      <MyFooter />
    </>
  );
}

export default TeamPage;
