import React from "react";
import styles from "./style/equipmentsCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function EquipmentsCards({ equipmentsInfo }) {
  console.log(equipmentsInfo, "equipmentsInfo");
  const router = useRouter();

  const goToEquipmentsDetail = (equipmentId) => {
    router.push(`${ROUTER.EQUIPMENTS}/${equipmentId}`);
  };

  return (
    <div className={styles.projectCardSection}>
      {equipmentsInfo.equipments.map((equipment, index) => (
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
            <h5>{equipment.title}</h5>
            <h6>{equipment.code}</h6>
            <p>{equipment.desc}</p>
            <button onClick={() => goToEquipmentsDetail(equipment.slug)}>
              Daha çox
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EquipmentsCards;
