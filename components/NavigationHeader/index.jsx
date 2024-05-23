import React from "react";
import { useRouter } from "next/router";
import styles from "./navigationHeader.module.css";
import { UsePageTitle } from "../../hooks/usePageTitle";

function NavHeader() {
  const { pageTitle, breadcrumb } = UsePageTitle();
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.navHeader}>
      <h4>{pageTitle}</h4>
      <p>
        {breadcrumb.map((crumb, index) => (
          <React.Fragment key={index}>
            <span
              onClick={() => handleClick(crumb.path)}
              className={styles.breadcrumbItem}
            >
              {crumb.label}
            </span>
            {index < breadcrumb.length - 1 && " / "}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export default NavHeader;
