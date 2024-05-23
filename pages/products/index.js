import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import ProductsCards from "@/components/ProductsCards";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useRouter } from "next/router";
import React from "react";

function Products() {
  const pageTitle = usePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <SwipeUpButton />
      <ProductsCards />
      <MyFooter />
    </>
  );
}

export default Products;
