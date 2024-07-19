import React, { useEffect, useState } from "react";
import ProductsCards from "@/components/ProductsCards";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { getProductsInfo } from "@/services/productsInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import NavHeader from "@/components/NavigationHeader";
import { useTeam } from "@/shared/contexts/TeamContext";

const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

export async function getServerSideProps(context) {
  const lang = context.query.lang || context.locale || "az";
  let productsInfo = null;

  try {
    productsInfo = await getProductsInfo(lang);
  } catch (error) {
    console.error("Error fetching products info:", error);
  }

  return {
    props: {
      productsInfo: productsInfo || [],
      initialLang: lang,
    },
  };
}

function Products({ productsInfo, initialLang }) {
  const pageTitle = UsePageTitle();
  const router = useRouter();
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(productsInfo);
  const { teamData } = useTeam();

  useEffect(() => {
    const fetchProductsInfo = async () => {
      const savedLang = localStorage.getItem("lang") || initialLang;
      if (savedLang !== lang) {
        setLang(savedLang);
        router.replace(router.pathname, router.asPath, { locale: savedLang });
      }
      const newData = await getProductsInfo(savedLang);
      setData(newData);
    };

    fetchProductsInfo();
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

  const metaTags = data.meta_tag || {};

  return (
    <>
      <Head>
        <title>{metaTags.meta_title}</title>
        <meta name="description" content={metaTags.meta_description} />
        <meta name="keywords" content={metaTags.meta_keywords} />
      </Head>
      <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
      <SwipeUpButton />
      <ProductsCards productsInfo={data} />
      <MyFooter />
    </>
  );
}

export default Products;
