import React, { useEffect, useState } from "react";
import styles from "./style/equipmentsCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function EquipmentsCards({ equipmentsInfo }) {
  console.log(equipmentsInfo, "equipmentsInfo");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  const getCurrentLanguageSlug = (equipment) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return equipment[currentLanguage];
  };

  const goToEquipmentsDetail = (equipment) => {
    const equipmentId = getCurrentLanguageSlug(equipment.slug);
    console.log(equipmentId, "equipmentId");
    router.push(`${ROUTER.EQUIPMENTS}/${equipmentId}`);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    const truncatedText = text.slice(0, length);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return text.slice(0, lastSpaceIndex) + "...";
  };

  if (!isClient) {
    return null; // or a loading spinner, placeholder, etc.
  }

  return (
    <div className={styles.projectCardSection}>
      {equipmentsInfo.equipments
        .slice()
        .reverse()
        .map((equipment, index) => (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            className={styles.projectsCards}
          >
            <div className={styles.projectCardImg}>
              <Image
                style={{
                  height: "373px",
                  boxSizing: "border-box",
                  objectFit: "contain",
                }}
                src={equipment.image}
                width={240}
                height={223}
                alt={equipment.title}
              />
            </div>
            <div className={styles.projectCard}>
              <h5>{equipment.name}</h5>
              <h6>{equipment.code}</h6>
              <p
                dangerouslySetInnerHTML={{
                  __html: truncateText(equipment.desc, 200),
                }}
              ></p>
              <button onClick={() => goToEquipmentsDetail(equipment)}>
                Daha çox
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default EquipmentsCards;
