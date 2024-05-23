import React from "react";
import EquipmentsCards from "@/components/EquipmentsCards";
import EquipmentsSectionFirst from "@/components/EquipmentsSectionFirst";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/hooks/usePageTitle";

function equipments() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <EquipmentsSectionFirst />
      <EquipmentsCards />
      <MyFooter />
    </>
  );
}

export default equipments;
