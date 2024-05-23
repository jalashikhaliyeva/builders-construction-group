import React from "react";
import styles from "./style/equipmentsCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";

function EquipmentsCards() {
  const router = useRouter();
  const goToEquipmentsDetail = () => {
    const equipmentId = "22"; //bu backendden deyisen ID olacag
    router.push(`${ROUTER.EQUIPMENTS}/${equipmentId}`);
  };
  return (
    <div className={styles.projectCardSection}>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards} >
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "contain",
            }}
            src="/imgEquipments/equipments1.jpg"
            width={240}
            height={223}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            beataepeditatatem.
          </p>
          <button onClick={goToEquipmentsDetail}>Daha çox</button>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
          alt="equipments2"
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "contain",
            }}
            src="/imgEquipments/equipments2.jpg"
            width={240}
            height={373}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>Nə iş gördüyü haqqında qısa məlumat üçün yer</p>
          <button onClick={goToEquipmentsDetail}>Daha çox</button>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "contain",
            }}
            src="/imgEquipments/equipments4.jpg"
            width={240}
            height={373}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>Nə iş gördüyü haqqında qısa məlumat üçün yer</p>
          <button onClick={goToEquipmentsDetail}>Daha çox</button>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "contain",
            }}
            src="/imgEquipments/equipments5.jpg"
            width={240}
            height={373}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>Nə iş gördüyü haqqında qısa məlumat üçün yer</p>
          <button onClick={goToEquipmentsDetail}>Daha çox</button>
        </div>
      </div>
    </div>
  );
}

export default EquipmentsCards;
