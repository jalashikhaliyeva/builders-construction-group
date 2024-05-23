import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import Vacancies from "@/components/Vacancies";
import MainHeader from "@/components/mainHeader";
import { usePageTitle } from "@/hooks/usePageTitle";
import React from "react";

function VacancyPage() {
  const pageTitle = usePageTitle();
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
