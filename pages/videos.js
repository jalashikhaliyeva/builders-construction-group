import React from "react";
import MainHeader from "@/components/mainHeader";
import NavHeader from "@/components/NavigationHeader";
import VideoModal from "@/components/VideosPageSection/VideoModal";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import VideosPageSect from "@/components/VideosPageSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import dynamic from "next/dynamic";
const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

function Videos() {
  const pageTitle = UsePageTitle();

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <VideosPageSect />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Videos;
