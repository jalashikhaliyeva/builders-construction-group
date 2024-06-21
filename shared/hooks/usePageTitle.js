import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { updateRouter, ROUTER } from "../constant/router"; 
import { useTranslation } from "next-i18next";

export function UsePageTitle() {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState("");
  const [breadcrumb, setBreadcrumb] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // updateRouter();

    const { pathname } = router;
    let breadcrumbPath = [{ label: t("ana səhifə"), path: ROUTER.HOME }];

    switch (pathname) {
      case ROUTER.HOME:
        setPageTitle(t("ana səhifə"));
        breadcrumbPath = [{ label: t("ana səhifə"), path: ROUTER.HOME }];
        break;
      case ROUTER.SERVICES:
        setPageTitle(t("xidmətlər"));
        breadcrumbPath.push({ label: t("xidmətlər"), path: ROUTER.SERVICES });
        break;
      case ROUTER.CONTACT:
        setPageTitle(t("əlaqə"));
        breadcrumbPath.push({ label: t("əlaqə"), path: ROUTER.CONTACT });
        break;
      case ROUTER.ABOUT:
        setPageTitle(t("haqqımızda"));
        breadcrumbPath.push({ label: t("haqqımızda"), path: ROUTER.ABOUT });
        break;
      case ROUTER.NEWS:
        setPageTitle(t("xəbərlər"));
        breadcrumbPath.push({ label: t("xəbərlər"), path: ROUTER.NEWS });
        break;
      case `${ROUTER.NEWS_DETAILS}`:
        setPageTitle(t("xəbərlər"));
        breadcrumbPath.push({ label: t("xəbərlər"), path: ROUTER.NEWS });
        // breadcrumbPath.push({
        //   label: t("xəbər detallari"),
        //   path: `${ROUTER.NEWS_DETAILS}`,
        // });
        break;
      case ROUTER.PHOTOS:
        setPageTitle(t("foto"));
        breadcrumbPath.push({ label: t("foto"), path: ROUTER.PHOTOS });
        break;
      case ROUTER.VIDEOS:
        setPageTitle(t("video"));
        breadcrumbPath.push({ label: t("video"), path: ROUTER.VIDEOS });
        break;
      case ROUTER.PROJECTS:
        setPageTitle(t("layihələr"));
        breadcrumbPath.push({ label: t("layihələr"), path: ROUTER.PROJECTS });
        break;
      case `${ROUTER.PROJECTS_DETAILS}`:
        setPageTitle(t("layihələr"));
        breadcrumbPath.push({ label: t("layihələr"), path: ROUTER.PROJECTS });
        // breadcrumbPath.push({
        //   label: t("layihə detalları"),
        //   path: `${ROUTER.PROJECTS_DETAILS}`,
        // });
        break;
      case ROUTER.EQUIPMENTS:
        setPageTitle(t("avadanlıqlar"));
        breadcrumbPath.push({
          label: t("avadanlıqlar"),
          path: ROUTER.EQUIPMENTS,
        });
        break;
      case `${ROUTER.EQUIPMENTS_DETAILS}`:
        setPageTitle(t("avadanlıqlar"));
        breadcrumbPath.push({
          label: t("avadanlıqlar"),
          path: ROUTER.EQUIPMENTS,
        });
        // breadcrumbPath.push({
        //   label: t("avadanlıq detalları"),
        //   path: `${ROUTER.EQUIPMENTS_}`,
        // });
        break;
      case ROUTER.TEAM:
        setPageTitle(t("rəhbərlik"));
        breadcrumbPath.push({ label: t("rəhbərlik"), path: ROUTER.TEAM });
        break;
      case `${ROUTER.TEAM_DETAILS}`:
        setPageTitle(t("rəhbərlik"));
        breadcrumbPath.push({ label: t("rəhbərlik"), path: ROUTER.TEAM });
        // breadcrumbPath.push({
        //   label: t("rəhbərlik"),
        //   path: `${ROUTER.TEAM_DETAILS}`,
        // });
        break;
      case ROUTER.VACANCY:
        setPageTitle(t("vakansiya"));
        breadcrumbPath.push({ label: t("vakansiya"), path: ROUTER.VACANCY });
        break;
      case `${ROUTER.VACANCY_DETAILS}`:
        setPageTitle(t("vakansiya detalları"));
        breadcrumbPath.push({ label: t("vakansiya"), path: ROUTER.VACANCY });
        // breadcrumbPath.push({
        //   label: t("vakansiya detalları"),
        //   path: `${ROUTER.VACANCY_DETAILS}`,
        // });
        break;
      case ROUTER.PRODUCTS:
        setPageTitle(t("məhsullar"));
        breadcrumbPath.push({ label: t("məhsullar"), path: ROUTER.PRODUCTS });
        break;
      case `${ROUTER.PRODUCTS_DETAILS}`:
        setPageTitle(t("məhsul detalları"));
        breadcrumbPath.push({ label: t("məhsullar"), path: ROUTER.PRODUCTS });
        // breadcrumbPath.push({
        //   label: t("məhsul detalları"),
        //   path: `${ROUTER.PRODUCTS_DETAILS}`,
        // });
        break;
      default:
        setPageTitle(t("unknown_page"));
        breadcrumbPath.push({ label: t("unknown_page"), path: pathname });
        break;
    }
    setBreadcrumb(breadcrumbPath);
  }, [router, t]);

  return { pageTitle, breadcrumb };
}
