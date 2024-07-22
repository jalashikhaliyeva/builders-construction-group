import dynamic from 'next/dynamic';
import MyFooter from '@/components/MyFooter';
import NavHeader from '@/components/NavigationHeader';
import MainHeader from '@/components/MainHeader';
import { useTeam } from '@/shared/contexts/TeamContext';
import { UsePageTitle } from '@/shared/hooks/usePageTitle';

const ServicesDetailSection = dynamic(() => import('@/components/ServicesDetailSection'), {
  ssr: false,
});

function ServicesDetail() {
  const pageTitle = UsePageTitle();
  const { teamData } = useTeam();

  return (
    <>
      <MainHeader teamInfo={teamData} />
      <NavHeader pageTitle={pageTitle} />
      <ServicesDetailSection />
      <MyFooter />
    </>
  );
}

export default ServicesDetail;
