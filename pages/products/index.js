import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ProductsCards from "@/components/ProductsCards";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { getProductsInfo } from "@/services/productsInfo";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(context) {
  let productsInfo = null;
  try {
    const response = await getProductsInfo();
    productsInfo = response?.data;
    console.log(productsInfo, "productsInfo");
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      productsInfo,
    },
  };
}
function Products({ productsInfo }) {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <SwipeUpButton />
      <ProductsCards productsInfo={productsInfo} />
      <MyFooter />
    </>
  );
}

export default Products;
