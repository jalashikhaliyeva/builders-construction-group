import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import NavHeader from "@/components/NavigationHeader";
import PhotosSection from "@/components/PhotosSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { getPhotos } from "@/services/photos";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

export async function getServerSideProps(context) {
  let photos = null;
  try {
    const response = await getPhotos();
    photos = response?.data;
  } catch (error) {
    console.error("Error fetching photos info:", error);
  }

  return {
    props: {
      photos,
    },
  };
}

function Photos({ photos }) {
  const { pageTitle, breadcrumb } = UsePageTitle();
  const metaTags = photos?.meta_tag || {};

  return (
    <>
      <Head>
        <title>{metaTags.meta_title}</title>
        <meta name="description" content={metaTags.meta_description} />
        <meta name="keywords" content={metaTags.meta_keywords} />
      </Head>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} breadcrumb={breadcrumb} />
      <PhotosSection photos={photos} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Photos;
