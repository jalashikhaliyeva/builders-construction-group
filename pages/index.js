import HeaderHome from "@/components/Header";
import VideoContainer from "@/components/VideoContainer";
import EmblaCarousel from "../components/Swiper/EmblaCarousel";
import Section2Home from "@/components/Section2Home";
import BlueSectionHome from "@/components/BlueSectionHome";
import ProjectsHome from "@/components/ProjectsHome";
import ServicesHome from "@/components/ServicesHome";
import NewsSectionHome from "@/components/NewsSectionHome";
import ConnectWithUs from "@/components/ConnectWithUsHome";
import Footer from "@/components/Footer";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MyFooter from "@/components/MyFooter";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};

const slideCount = 11;
const slidesImg = Array.from(
  { length: slideCount },
  (_, i) => `/imageSlider/slider${i + 1}.svg`
);
// const SLIDE_COUNTt = 5

export default function Home() {
  return (
    <main>
      <HeaderHome />
      <br />

      <VideoContainer />
      <EmblaCarousel slides={slides} options={options} />
      <Section2Home />
      <BlueSectionHome />
      <ProjectsHome /> 
      {/* <ServicesHome /> */}
      <NewsSectionHome />
      <ConnectWithUs />
      <EmblaCarousel slides={slidesImg} options={options} />
      <SwipeUpButton />
      {/* <Footer /> */}
      <MyFooter />
    </main>
  );
}
