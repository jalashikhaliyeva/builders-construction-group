import React from "react";
import MainHeader from "@/components/mainHeader";
import NavHeader from "@/components/NavigationHeader";
import VideoModal from "@/components/VideosPageSection/VideoModal";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import VideosPageSect from "@/components/VideosPageSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useTeam } from "@/shared/contexts/TeamContext";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

// Assuming you have a function to fetch the meta tags data
export async function getServerSideProps(context) {
  // Fetch your meta tags here
  const metaTags = {
    meta_title: "Video",
    meta_description: "Video",
    meta_keywords: "Video"
  };

  return {
    props: {
      metaTags
    }
  };
}

function Videos({ metaTags }) {
  const pageTitle = UsePageTitle();
  const { teamData } = useTeam();

  return (
    <>
      <Head>
        <title>{metaTags?.meta_title}</title>
        <meta name="description" content={metaTags?.meta_description} />
        <meta name="keywords" content={metaTags?.meta_keywords} />
      </Head>
      <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
      <VideosPageSect />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Videos;
