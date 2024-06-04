import ConnectWithUs from "@/components/ConnectWithUsHome";
import ContactUsSectionFirst from "@/components/ContactUsPageSectFirst";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { getContactInfo } from "@/services/contactInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

export async function getServerSideProps(context) {
  let contactInfo = null;
  try {
    const response = await getContactInfo();
    contactInfo = response?.data;
    console.log(contactInfo, "contactInfo");
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      contactInfo,
    },
  };
}

function contact({ contactInfo }) {
  console.log(contactInfo, "contactInfo");
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ContactUsSectionFirst contactInfo={contactInfo} />
      <ConnectWithUs />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default contact;
