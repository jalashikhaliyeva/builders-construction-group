import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import PhotosSection from "@/components/PhotosSection";

import MainHeader from "@/components/mainHeader";
import { getPhotos } from "@/services/photos";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

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
      <MyFooter />
    </>
  );
}

export default Photos;
