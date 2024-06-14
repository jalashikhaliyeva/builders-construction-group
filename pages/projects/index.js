import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ProjectsCards from "@/components/ProjectsPageCard";
import ProjectsSectionFirst from "@/components/ProjectsPageSectionFirst";
import ServicesHome from "@/components/ServicesHome";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { getProjectsInfoDetail } from "@/services/projectDetail";
import { getProjectsInfo } from "@/services/projectsInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let projectsInfo = null;

  try {
    projectsInfo = await getProjectsInfo(lang);
  } catch (error) {
    console.error("Error fetching projects info:", error);
  }

  return {
    props: {
      projectsInfo: projectsInfo || [],
      initialLang: lang,
    },
  };
}
function Projects({ projectsInfo, initialLang }) {
  console.log(projectsInfo, "projectsInfo");
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(projectsInfo);
  useEffect(() => {
    const fetchProjectsInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getProjectsInfo(savedLang);
      setData(newData);
    };

    fetchProjectsInfo();
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
      <ProjectsSectionFirst projectsInfo={data} />
      <ProjectsCards projectsInfo={data} />
      <EmblaCarousel slides={slides} options={options} />
      {/* <ServicesHome />   */}
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Projects;
