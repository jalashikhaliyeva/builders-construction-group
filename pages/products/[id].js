const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from "@/components/NavigationHeader";
import ProductsDetailSect from "@/components/ProductsDetails";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import { useTeam } from "@/shared/contexts/TeamContext";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import dynamic from "next/dynamic";
import React from "react";

function ProductsDetail() {
  const pageTitle = UsePageTitle();
  const { teamData } = useTeam();
  return (
    <>
 <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
      <SwipeUpButton />
      <ProductsDetailSect />
      <MyFooter />
    </>
  );
}

export default ProductsDetail;
