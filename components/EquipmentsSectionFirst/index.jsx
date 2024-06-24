import React, { useEffect, useState } from "react";
import styles from "../ServicesPageSection1/servicesPage.module.css";
import Image from "next/image";
import style from "./responsiveEquipm.module.css";

function EquipmentsSectionFirst({ equipmentsInfo }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { title, desc, image } = equipmentsInfo?.component;

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const truncatedDesc = truncateText(desc, 350);
  if (!isClient) {
    return null;
  }
  return (
    <div className={style.responsiveEquipment}>
      <div className={styles.aboutSectContainer}>
        <div className={style.aboutSectBox} data-aos="fade-right">
          <h2>{title}</h2>
          <p>{truncatedDesc}</p>
        </div>
        <div className={styles.aboutSectImage}>
          <Image
            style={{ marginLeft: "50px" , borderRadius:"14px" }}
            src={image}
            alt={title}
            width={960}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default EquipmentsSectionFirst;
