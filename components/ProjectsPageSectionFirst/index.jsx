import React from "react";
import styles from "../ServicesPageSection1/servicesPage.module.css";
import style from "./projectsSectFirst.module.css";
import Image from "next/image";

function ProjectsSectionFirst({ projectsInfo }) {
  const { title, desc, image } = projectsInfo.component;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className={style.projectsSectFirst}>
      <div className={styles.aboutSectContainer}>
        <div
          style={{ right: "605px" }}
          className={styles.aboutSectBox}
          data-aos="fade-right"
        >
          <h2>{title}</h2>
          <p>{truncateText(desc, 350)}</p>
        </div>
        <div className={styles.aboutSectImage}>
          <Image style={{borderRadius:"8px"}} src={image} width={990} height={900} alt="Project Image" />
        </div>
      </div>
    </div>
  );
}

export default ProjectsSectionFirst;
