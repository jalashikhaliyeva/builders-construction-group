const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from "@/components/NavigationHeader";
import PhotosSection from "@/components/PhotosSection";
import SwipeUpButton from "@/components/SwipeUpBtn";

import MainHeader from "@/components/mainHeader";
import { getPhotos } from "@/services/photos";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import dynamic from "next/dynamic";

export async function getServerSideProps(context) {
  let photos = null;
  try {
    const response = await getPhotos();
    // console.log(response,"response");
    photos = response?.data;
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      photos,
    },
  };
}

function Photos({ photos }) {
  const { pageTitle, breadcrumb } = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} breadcrumb={breadcrumb} />
      <PhotosSection photos={photos} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Photos;
