import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useRouter } from "next/router";

import React, { useState } from "react";
import NewsDetailSection from "@/components/NewsDetailSection";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import SwipeUpButton from "@/components/SwipeUpBtn";
import dynamic from "next/dynamic";
import { getHomeInfo } from "@/services/homeInfo";
import { useTeam } from "@/shared/contexts/TeamContext";
import ServicesDetailSection from "@/components/ServicesDetailSection";
const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

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

function ServicesDetail({ homeInfo }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [data, setData] = useState(homeInfo);
  const { teamData } = useTeam();
  return (
    <>
      <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
     
      <ServicesDetailSection />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default ServicesDetail;
