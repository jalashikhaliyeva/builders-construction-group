import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import MainHeader from "@/components/mainHeader";
import NavHeader from "@/components/NavigationHeader";
import ProjectsDetailSection from "@/components/ProjectsDetailSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import { getProjectsInfoDetail } from "@/services/projectDetail";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { getHomeInfo } from "@/services/homeInfo";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

const options = {
  loop: true,
};

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let projectsInfoDetail = null;
  try {
    projectsInfoDetail = await getProjectsInfoDetail(lang);
  } catch (error) {
    console.error("Error fetching projects info detail:", error);
  }

  return {
    props: {
      projectsInfoDetail: projectsInfoDetail || {},
      initialLang: lang,
    },
  };
}

function ProjectsDetail({ projectsInfoDetail, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(projectsInfoDetail);

  useEffect(() => {
    const fetchProjectsInfoDetail = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getHomeInfo(savedLang);
      setData(newData);
    };

    fetchProjectsInfoDetail();
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

  const projectSlides = data?.gallery?.map((slide) => slide?.image) || [];

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ProjectsDetailSection projectInfo={data} />
      <EmblaCarousel
        slides={projectSlides}
        options={options}
        imageClassName="secondCarousel__image"
      />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default ProjectsDetail;
