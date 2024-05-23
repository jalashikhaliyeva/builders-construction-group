import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ProjectsCards from "@/components/ProjectsPageCard";
import ProjectsSectionFirst from "@/components/ProjectsPageSectionFirst";
import ServicesHome from "@/components/ServicesHome";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/hooks/usePageTitle";
import React from "react";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};
function Projects() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ProjectsSectionFirst />
      <ProjectsCards />
      <EmblaCarousel slides={slides} options={options} />
      <ServicesHome />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Projects;
