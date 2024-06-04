import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ProjectsDetailSection from "@/components/ProjectsDetailSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { getProjectsInfoDetail } from "@/services/projectDetail";
// import { getProjectsInfo } from "@/services/projectsInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useRouter } from "next/router";
import React from "react";

const options = {
  loop: true,
};
const slideCount = 11;
const slidesImg = Array.from(
  { length: slideCount },
  (_, i) => `/imageSlider/slider${i + 1}.svg`
);

function ProjectsDetail() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ProjectsDetailSection />
      <EmblaCarousel slides={slidesImg} options={options} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default ProjectsDetail;
