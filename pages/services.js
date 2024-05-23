import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import React from "react";
import { useRouter } from "next/router";
import { ROUTER } from "../constant/router";
import { UsePageTitle } from "@/hooks/usePageTitle";
import ServicesSectionFirst from "@/components/ServicesPageSection1";
import ServicesPageBoxes from "@/components/ServicesPageBoxes";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MyFooter from "@/components/MyFooter";

function services() {
  const pageTitle = UsePageTitle();

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      {/* <ServicesSectionFirst /> */}
      <ServicesPageBoxes />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default services;
