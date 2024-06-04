import React from "react";
import styles from "../ServicesPageSection1/servicesPage.module.css";
import Image from "next/image";
import style from "./responsiveEquipm.module.css";

function EquipmentsSectionFirst({ equipmentsInfo }) {
  // Extract the relevant data from equipmentsInfo
  const { title, desc, image } = equipmentsInfo.component;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const truncatedDesc = truncateText(desc, 350);

  return (
    <div className={style.responsiveEquipment}>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox} data-aos="fade-right">
          <h2>{title}</h2>
          <p>{truncatedDesc}</p>
        </div>
        <div className={styles.aboutSectImage}>
          <Image src={image} alt={title} width={990} height={900} />
        </div>
      </div>
    </div>
  );
}

export default EquipmentsSectionFirst;
