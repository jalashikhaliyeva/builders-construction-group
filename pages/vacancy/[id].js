const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from "@/components/NavigationHeader";
import Vacancies from "@/components/Vacancies";
import VacancyDetails from "@/components/VacanciesDetails";
import MainHeader from "@/components/mainHeader";
import { useTeam } from "@/shared/contexts/TeamContext";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import dynamic from "next/dynamic";
import React from "react";

function VacancyDetailPage() {
  const pageTitle = UsePageTitle();
  const { teamData } = useTeam();
  return (
    <>
 <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
      <VacancyDetails />

      <MyFooter />
    </>
  );
}

export default VacancyDetailPage;
