import React from "react";
import EquipmentsCards from "@/components/EquipmentsCards";
import EquipmentsSectionFirst from "@/components/EquipmentsSectionFirst";
import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import { getEquipmentsInfo } from "@/services/equipmentsInfo";

export async function getServerSideProps(context) {
  let equipmentsInfo = null;
  try {
    const response = await getEquipmentsInfo();
    equipmentsInfo = response?.data;
    console.log(equipmentsInfo, "equipments index");
  } catch (error) {
    console.error("Error fetching about info:", error);
  }

  return {
    props: {
      equipmentsInfo,
    },
  };
}
function equipments({ equipmentsInfo }) {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <EquipmentsSectionFirst equipmentsInfo={equipmentsInfo} />
      <EquipmentsCards equipmentsInfo={equipmentsInfo} />
      <MyFooter />
    </>
  );
}

export default equipments;
