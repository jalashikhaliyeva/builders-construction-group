const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from '@/components/NavigationHeader';
import MainHeader from '@/components/mainHeader'
import TeamDetail from '@/components/teamDetailCard';
import { useTeam } from '@/shared/contexts/TeamContext';
import { UsePageTitle } from '@/shared/hooks/usePageTitle';
import dynamic from 'next/dynamic';
import React from 'react'

function TeamDetailsPage() {
  const pageTitle = UsePageTitle();
  const { teamData } = useTeam();
  return (
    <>  
    <MainHeader teamInfo={teamData} />
    <NavHeader pageTitle={pageTitle} />
    <TeamDetail />

    <MyFooter />

      
    </>
  )
}

export default TeamDetailsPage