const MyFooter = dynamic(() => import("@/components/MyFooter"), { ssr: false });
import NavHeader from '@/components/NavigationHeader';
import MainHeader from '@/components/mainHeader'
import TeamDetail from '@/components/teamDetailCard';
import { UsePageTitle } from '@/shared/hooks/usePageTitle';
import dynamic from 'next/dynamic';
import React from 'react'

function TeamDetailsPage() {
  const pageTitle = UsePageTitle();
  return (
    <>  
    <MainHeader />
    <NavHeader pageTitle={pageTitle} />
    <TeamDetail />

    <MyFooter />

      
    </>
  )
}

export default TeamDetailsPage