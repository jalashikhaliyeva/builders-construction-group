import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useRouter } from "next/router";

import React from "react";
import NewsDetailSection from "@/components/NewsDetailSection";
import EmblaCarousel from "@/components/Swiper/EmblaCarousel";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MyFooter from "@/components/MyFooter";

const options = {
  loop: true,
};


const slideCount = 11;
const slidesImg = Array.from(
  { length: slideCount },
  (_, i) => `/imageSlider/slider${i + 1}.svg`
);
function NewsDetail() {
  const pageTitle = usePageTitle();
  const router = useRouter();
  // const { id } = router.query;  bu news sehifesinden oturulen id'ni qaytarir
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <NewsDetailSection />
      <EmblaCarousel slides={slidesImg} options={options} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default NewsDetail;
