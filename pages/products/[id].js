import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ProductsDetailSect from "@/components/ProductsDetails";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { usePageTitle } from "@/hooks/usePageTitle";
import React from "react";

function ProductsDetail() {
  const pageTitle = usePageTitle();

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <SwipeUpButton />
      <ProductsDetailSect />
      

      <MyFooter />
    </>
  );
}

export default ProductsDetail;
