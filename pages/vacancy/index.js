import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import Vacancies from "@/components/Vacancies";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import React from "react";

function VacancyPage() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <Vacancies />

      <MyFooter />
    </>
  );
}

export default VacancyPage;
