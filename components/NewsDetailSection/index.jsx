import React, { useState } from "react";
import styles from "./newsDetail.module.css";
import Image from "next/image";
import { ROUTER } from "../../shared/constant/router";
import { useRouter } from "next/router";

function NewsDetailSection() {
  const { push } = useRouter();
  return (
    <div className={styles.newsDetailSection}>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox} data-aos="fade-right">
          <h2>Qarabağda yeni layihəyə start verdik</h2>
          <div
            style={{
              display: "flex",
              gap: "29px",
              marginTop: "26px",
            }}
          >
            <h6>31.04.2024</h6>
            <h5>BCG group</h5>
          </div>
        </div>
        <div className={styles.aboutSectImage}>
          <Image src="/images/newsTitleImg.jpg" width={1000} height={900} />
        </div>
      </div>

      <div className={styles.newsDetailDescription}>
        <p>
          Embracing Innovation: Unveiling Our Latest Architectural Marvel! Were
          excited to lift the curtain on our newest endeavor, a visionary
          project poised to transform city skylines and redefine urban living.
          With a blend of cutting-edge design, sustainable practices, and a
          commitment to excellence, were setting the stage for a landmark
          development that will stand as a testament to progress. Follow along
          as we embark on this journey, shaping the future one brick at a time.
          #BuildingTheFuture #ArchitecturalInnovation #SustainableLiving
        </p>

        <button
          style={{ marginBottom: "50px" }}
          onClick={() => push(ROUTER.NEWS)}
        >
          Geri
        </button>
      </div>
    </div>
  );
}

export default NewsDetailSection;
