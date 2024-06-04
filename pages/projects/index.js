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
import React from "react";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};

export async function getServerSideProps(context) {
  let projectsInfo = null;
  try {
    const response = await getProjectsInfo();
    projectsInfo = response?.data;
    console.log(projectsInfo, "projectsInfo");
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      projectsInfo,
    },
  };
}
function Projects({ projectsInfo }) {
  console.log(projectsInfo, "projectsInfo");
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ProjectsSectionFirst projectsInfo={projectsInfo}  />
      <ProjectsCards projectsInfo={projectsInfo} />
      <EmblaCarousel slides={slides} options={options} />
      {/* <ServicesHome />   */}
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Projects;
