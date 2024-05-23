import MyFooter from '@/components/MyFooter';
import NavHeader from '@/components/NavigationHeader';
import MainHeader from '@/components/mainHeader'
import TeamDetail from '@/components/teamDetailCard';
import { usePageTitle } from '@/hooks/usePageTitle';
import React from 'react'

function TeamDetailsPage() {
  const pageTitle = usePageTitle();
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