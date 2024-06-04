import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import PhotosSection from "@/components/PhotosSection";

import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

function Photos() {
  const { pageTitle, breadcrumb } = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} breadcrumb={breadcrumb} />
      <PhotosSection />
      <MyFooter />
    </>
  );
}

export default Photos;
