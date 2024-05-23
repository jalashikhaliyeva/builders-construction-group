import ConnectWithUs from "@/components/ConnectWithUsHome";
import ContactUsSectionFirst from "@/components/ContactUsPageSectFirst";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/hooks/usePageTitle";

function contact() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ContactUsSectionFirst />
      <ConnectWithUs />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default contact;
