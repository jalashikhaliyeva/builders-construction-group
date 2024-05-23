import MyFooter from '@/components/MyFooter';
import NavHeader from '@/components/NavigationHeader';
import MainHeader from '@/components/mainHeader'
import TeamDetail from '@/components/teamDetailCard';
import { UsePageTitle } from '@/hooks/usePageTitle';
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