import React from "react";
import EquipmentsDetailSect from "@/components/EquipmentsDetailPage";
import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import dynamic from "next/dynamic";
const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });

const OPTIONS = {};
const IMAGES = [
  "/imgEquipments/equipments1.jpg",
  "/imgEquipments/equipments4.jpg",
  "/imgEquipments/equipments2.jpg",
  "/imgEquipments/equipments5.jpg",
];

function EquipmentsDetail() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <EquipmentsDetailSect />
      {/* <EmblaCarousel slides={IMAGES} options={OPTIONS} /> */}
      <MyFooter />
    </>
  );
}


export default EquipmentsDetail;
