import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import TeamMembersCards from "@/components/TeamMembersCards";
import MainHeader from "@/components/mainHeader";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";
import React from "react";

function TeamPage() {
  const pageTitle = UsePageTitle();
  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <TeamMembersCards />
      <MyFooter />
    </>
  );
}

export default TeamPage;
