import React from "react";
import { useRouter } from "next/router";
import styles from "./navigationHeader.module.css";
import { UsePageTitle } from "../../shared/hooks/usePageTitle";
import { useTranslation } from "next-i18next";

function NavHeader() {
  const { t } = useTranslation("common");
  const { pageTitle, breadcrumb } = UsePageTitle();
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.navHeader}>
      <h4 style={{ textTransform: "uppercase", paddingRight:"100px" }}>
        {t(pageTitle)}
      </h4>
      <p>
        {breadcrumb.map((crumb, index) => (
          <React.Fragment key={index}>
            <span
              onClick={() => handleClick(crumb.path)}
              className={styles.breadcrumbItem}
            >
              {t(crumb.label)}
            </span>
            {index < breadcrumb.length - 1 && " / "}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default NavHeader;
