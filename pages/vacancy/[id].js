import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import Vacancies from "@/components/Vacancies";
import VacancyDetails from "@/components/VacanciesDetails";
import MainHeader from "@/components/mainHeader";
import { usePageTitle } from "@/hooks/usePageTitle";
import React from "react";

function VacancyDetailPage() {
  const pageTitle = usePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <VacancyDetails />

      <MyFooter />
    </>
  );
}

export default VacancyDetailPage;
