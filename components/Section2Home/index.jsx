import Image from "next/image";
import React from "react";
import styles from "./section2Home.module.css";
import MissionsVision from "../MissionsVision";

function Section2Home() {
  return (
    <>
      <div  data-aos="fade-right" className={styles.section2Home}>
        <div className={styles.section2about}>
          <h1>Yenilikçi həllər ilə parlaq gələcəyə birgə irəliləyək</h1>
          <button>Ətraflı</button>
        </div>
        <div className={styles.section2img}>
          <Image
            className={styles.imgMission}
            src="/images/section2img.jpg"
            alt="section2image"
            width={845}
            height={616}
          />
        </div>
      </div>
      <MissionsVision />
    </>
  );
}

export default Section2Home;
