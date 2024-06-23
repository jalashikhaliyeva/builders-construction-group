import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import NavHeader from "@/components/NavigationHeader";
import ProjectsCards from "@/components/ProjectsPageCard";
import ProjectsSectionFirst from "@/components/ProjectsPageSectionFirst";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { getProjectsInfo } from "@/services/projectsInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

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
      <ProjectsSectionFirst projectsInfo={data} />
      <ProjectsCards projectsInfo={data} />
      <EmblaCarousel
        slides={data.partner?.map((partner) => partner?.image)}
        options={options}
        imageClassName="firstCarousel__image"
      />
      {/* <ServicesHome />   */}
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Projects;
