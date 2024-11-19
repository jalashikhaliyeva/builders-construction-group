import React from "react";
import { useTranslation } from "next-i18next";
import styles from "./blueSectionHome.module.css";
import Image from "next/image";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";
import { Box, Spinner } from "@chakra-ui/react";

function BlueSectionHome({ homeInfo, staticEquipmentImg }) {
  const { push } = useRouter();
  const { t, ready } = useTranslation();

  if (!homeInfo?.equipments) {
    return (
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(255, 255, 255, 1)"
        zIndex="9999"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  const data = homeInfo.equipments;

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

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.blueSectionHome}>
      <div className={styles.blueSectionInfoText}>
        <h2>{t("İstehsal və idxal etdiyimiz avadanlıqlarımız")}</h2>
      </div>

      <div className={styles.ImageBackgroundContainer}>
        <Image
          alt="blueSectionBackground"
          style={{ borderRadius: "20px" }}
          src={staticEquipmentImg}
          width={1295}
          height={800}
          className={styles.blueSectionBackgroundImg}
        />
      </div>
      <div className={styles.equipmentContainer}>
        {data.map((item, index) => (
          <div
            style={{ cursor: "pointer" }}
            key={index}
            className={getBoxStyle(index)}
     
            onClick={() => push(ROUTER.EQUIPMENTS)}
          >
            <h5>{item.title}</h5>
            <div dangerouslySetInnerHTML={{ __html: item.desc }} />
          </div>
        ))}
      </div>
      <button onClick={() => push(ROUTER.EQUIPMENTS)}>{t("ətraflı")}</button>
    </section>
  );
}

export default BlueSectionHome;
