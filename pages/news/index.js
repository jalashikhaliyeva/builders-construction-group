import MyFooter from "@/components/MyFooter";
import NavHeader from "@/components/NavigationHeader";
import NewsTitleSection from "@/components/NewsTitleSection";
import SwipeUpButton from "@/components/SwipeUpBtn";
import MainHeader from "@/components/mainHeader";
import NewsCards from "@/components/newsCardsSect";
import { UsePageTitle } from "@/shared/hooks/usePageTitle";

function news() {
  const pageTitle = UsePageTitle();

  return (
    <>
      <MainHeader />
      <NavHeader pageTitle={pageTitle} />
      <NewsTitleSection />
      <NewsCards />
      <SwipeUpButton />
      <MyFooter />
    </>
  );
}

export default news;
