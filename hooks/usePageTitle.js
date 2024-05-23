import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ROUTER } from "../constant/router";

export function UsePageTitle() {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    const { pathname } = router;
    let breadcrumbPath = [{ label: "Ana səhİfə", path: ROUTER.HOME }];
    switch (pathname) {
      case ROUTER.HOME:
        setPageTitle("Ana səhİfə");
        breadcrumbPath = [{ label: "Ana səhİfə", path: ROUTER.HOME }];
        break;
      case ROUTER.SERVICES:
        setPageTitle("Xidmətlər");
        breadcrumbPath.push({ label: "Xidmətlər", path: ROUTER.SERVICES });
        break;
      case ROUTER.CONTACT:
        setPageTitle("Əlaqə");
        breadcrumbPath.push({ label: "Əlaqə", path: ROUTER.CONTACT });
        break;
      case ROUTER.ABOUT:
        setPageTitle("Haqqımızda");
        breadcrumbPath.push({ label: "Haqqımızda", path: ROUTER.ABOUT });
        break;
      case ROUTER.NEWS:
        setPageTitle("Xəbərlər");
        breadcrumbPath.push({ label: "Xəbərlər", path: ROUTER.NEWS });
        break;
      case `${ROUTER.NEWS}/[id]`:
        setPageTitle("Xəbərlər");
        breadcrumbPath.push({ label: "Xəbərlər", path: ROUTER.NEWS });
        breadcrumbPath.push({ label: "Xəbər Detalları", path: ROUTER.NEWS });
        break;
      case ROUTER.PHOTOS:
        setPageTitle("Foto");
        breadcrumbPath.push({ label: "Foto", path: ROUTER.PHOTOS });
        break;
      case ROUTER.VIDEOS:
        setPageTitle("Videolar");
        breadcrumbPath.push({ label: "Videolar", path: ROUTER.VIDEOS });
        break;
      case ROUTER.PROJECTS:
        setPageTitle("Layihələr");
        breadcrumbPath.push({ label: "Layihələr", path: ROUTER.PROJECTS });
        break;
      case `${ROUTER.PROJECTS}/[id]`:
        setPageTitle("Layihələr");
        breadcrumbPath.push({ label: "Layihələr", path: ROUTER.PROJECTS });
        breadcrumbPath.push({
          label: "Layihə Detalları",
          path: ROUTER.PROJECTS,
        });
        break;
      case ROUTER.EQUIPMENTS:
        setPageTitle("Avadanlıqlarımız");
        breadcrumbPath.push({
          label: "Avadanlıqlarımız",
          path: ROUTER.EQUIPMENTS,
        });
        break;
      case `${ROUTER.EQUIPMENTS}/[id]`:
        setPageTitle("Avadanlıqlarımız");
        breadcrumbPath.push({
          label: "Avadanlıqlarımız",
          path: ROUTER.EQUIPMENTS,
        });
        breadcrumbPath.push({
          label: "Avadanlıq Detalları",
          path: ROUTER.EQUIPMENTS,
        });
        break;
      case ROUTER.TEAM:
        setPageTitle("İdarə Heyəti");
        breadcrumbPath.push({ label: "İdarə Heyəti", path: ROUTER.TEAM });
        break;
      case `${ROUTER.TEAM}/[id]`:
        setPageTitle("İdarə Heyəti detalları");
        breadcrumbPath.push({
          label: "İdarə Heyəti ",
          path: ROUTER.TEAM,
        });
        breadcrumbPath.push({
          label: "İdarə Heyəti detalları",
          path: pathname,
        });
        break;
      case ROUTER.VACANCY:
        setPageTitle("Vakansiyalar");
        breadcrumbPath.push({ label: "Vakansiyalar", path: ROUTER.VACANCY });
        break;
      case `${ROUTER.VACANCY}/[id]`:
        setPageTitle("Vakansiya detalları");
        breadcrumbPath.push({
          label: "Vakansiyalar",
          path: ROUTER.VACANCY,
        });
        break;
      case ROUTER.PRODUCTS:
        setPageTitle("Məhsullar");
        breadcrumbPath.push({ label: "Məhsullar", path: ROUTER.PRODUCTS });
        break;
      case `${ROUTER.PRODUCTS}/[id]`:
        setPageTitle("Məhsul detalları");
        breadcrumbPath.push({
          label: "Məhsullar",
          path: ROUTER.PRODUCTS,
        });
        break;

      default:
        setPageTitle("Unknown Page");
        breadcrumbPath.push({ label: "Unknown Page", path: pathname });
        break;
    }
    setBreadcrumb(breadcrumbPath);
  }, [router]);

  return { pageTitle, breadcrumb };
}
