import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certificates";
import Faq from "@/components/Faq";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ServicesHome from "@/components/ServicesHome";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/hooks/usePageTitle";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};
function About() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <AboutUs />
      <Certificates />
      <Faq />
      <EmblaCarousel slides={slides} options={options} />
      <ServicesHome />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default About;
