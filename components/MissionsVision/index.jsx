import React from "react";
import styles from "./missions.module.css";
import Image from "next/image";

function MissionsVision({ aboutInfo }) {
  const { detail } = aboutInfo;

  console.log(aboutInfo, "mission vision");

  return (
    <div className={styles.section2HomeMissions}>
      <div className={styles.section2HomeMissionImg}>
        <Image
          src="/images/section2HomeMissions.jpg"
          alt="section2HomeMission"
          width={457}
          height={347}
        />
      </div>

      <div className={styles.homeMissionsText}>
        <p className={styles.homeMissionsTitle}>{detail[0]?.title}</p>
        <p className={styles.homeMissionsDesc}>{detail[0]?.desc}</p>
      </div>

      <div className={styles.homeVisionText}>
        <p className={styles.homeMissionsTitle}>{detail[1]?.title}</p>
        <p className={styles.homeMissionsDesc}>{detail[1]?.desc}</p>
      </div>
    </div>
  );
}

export default MissionsVision;
