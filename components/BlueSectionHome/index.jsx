import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./blueSectionHome.module.css";
import Image from "next/image";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";

function BlueSectionHome({ homeInfo }) {
  const data = homeInfo.equipments;
  const { push } = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const getBoxStyle = (index) => {
    switch (index % 4) {
      case 0:
        return styles.blueSectionWhiteBox;
      case 1:
        return styles.blueSectionBlueBox;
      case 2:
        return styles.blueSectionWhite2Box;
      case 3:
        return styles.blueSectionBlue2Box;
      default:
        return styles.blueSectionWhiteBox;
    }
  };

  const getAnimation = (index) => {
    switch (index % 4) {
      case 0:
        return "fade-down-left";
      case 1:
        return "fade-down-right";
      case 2:
        return "fade-down-right";
      case 3:
        return "fade-down-left";
      default:
        return "fade-down-left";
    }
  };

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  return (
    <section className={styles.blueSectionHome}>
      <div className={styles.blueSectionInfoText}>
        <h2>İstehsal və idxal etdiyimiz avadanlıqlarımız</h2>
        <button onClick={() => push(ROUTER.EQUIPMENTS)}> {t("ətraflı")}</button>
      </div>

      <Image
        alt="blueSectionBackground"
        style={{ borderRadius: "20px" }}
        src="/images/blueSectionBackground.jpg"
        width={1295}
        height={800}
        className={styles.blueSectionBackgroundImg}
      />

      <div className={styles.equipmentContainer}>
        {data.map((item, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={index}
            className={getBoxStyle(index)}
            data-aos={getAnimation(index)}
            onClick={() => push(ROUTER.EQUIPMENTS)}
          >
            <h5>{item.title}</h5>
            <div dangerouslySetInnerHTML={{ __html: item.desc }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlueSectionHome;
