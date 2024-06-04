import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certificates";
import Faq from "@/components/Faq";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ServicesHome from "@/components/ServicesHome";
import SwipeUpButton from "@/components/SwipeUpBtn";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import MainHeader from "@/components/mainHeader";
import { getAboutInfo } from "@/services/aboutInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

const SLIDE_COUNT = 11;
const slides = Array.from(
  { length: SLIDE_COUNT },
  (_, i) => `/sliderImg/slide${i + 1}.svg`
);

const options = {
  loop: true,
};

export async function getServerSideProps(context) {
  let aboutInfo = null;
  try {
    const response = await getAboutInfo();
    aboutInfo = response?.data;
    // console.log(aboutInfo, "abPage");
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      aboutInfo,
    },
  };
}

function About({ aboutInfo }) {
  console.log(aboutInfo, "aboutInfo");
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <AboutUs aboutInfo={aboutInfo} />
      <Certificates aboutInfo={aboutInfo} />
      <Faq aboutInfo={aboutInfo} />
      <EmblaCarousel slides={slides} options={options} />
      <ServicesHome aboutInfo={aboutInfo} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default About;
