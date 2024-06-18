import ConnectWithUs from "@/components/ConnectWithUsHome";
import ContactUsSectionFirst from "@/components/ContactUsPageSectFirst";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { getContactInfo } from "@/services/contactInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let contactInfo = null;

  try {
    contactInfo = await getContactInfo(lang);
  } catch (error) {
    console.error("Error fetching contact info:", error);
  }

  return {
    props: {
      contactInfo: contactInfo || { contact: [] },
      initialLang: lang,
    },
  };
}

function Contact({ contactInfo, initialLang }) {
  console.log(contactInfo, "contactInfo");
  const pageTitle = UsePageTitle();

  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(contactInfo);

  useEffect(() => {
    const fetchContactInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getContactInfo(savedLang);
      setData(newData);
    };

    fetchContactInfo();
  }, [lang, initialLang, router]);

  useEffect(() => {
    const handleRouteChange = (url, { locale }) => {
      if (locale && locale !== lang) {
        setLang(locale);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [lang, router]);

  const contactImageURL = data?.static_images?.contact;
  // console.log(data?.static_images?.contact, "dataofcontact");

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <ContactUsSectionFirst contactInfo={data} />
      <ConnectWithUs contactImageURL={contactImageURL} />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default Contact;
