import React from "react";
import styles from "./blueSectionHome.module.css";
import Image from "next/image";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";

function BlueSectionHome() {
  const { push } = useRouter();
  return (
    <section className={styles.blueSectionHome}>
      <div className={styles.blueSectionInfoText}>
        <h2>İstehsal və idxal etdiyimiz avadanlıqlarımız</h2>
        <button onClick={() => push(ROUTER.EQUIPMENTS)}>Daha çox</button>
      </div>

      <Image
      alt="blueSectionBackground"
        style={{
          borderRadius: "20px",
        }}
        src="/images/blueSectionBackground.jpg"
        width={1295}
        height={800}
        className={styles.blueSectionBackgroundImg}
      />

      <div className={styles.blueSectionWhiteBox} data-aos="fade-down-left">
        <h5>BCG Kabel</h5>
        <p>
          Öz istehsalımız olan bu kabel 300/500 V nominal gərginliyə, 2x0.75 mm2
          ölçüyə malikdir. Uzunluğu isə 100 metrdir.
        </p>
      </div>
      <div className={styles.blueSectionBlueBox} data-aos="fade-down-right">
        <h5>BCG Kabel</h5>
        <p>
          Öz istehsalımız olan bu kabel 300/500 V nominal gərginliyə, 2x0.75 mm2
          ölçüyə malikdir. Uzunluğu isə 100 metrdir.
        </p>
      </div>
      <div className={styles.blueSectionWhite2Box} data-aos="fade-down-right">
        <h5>BCG Kabel</h5>
        <p>
          Öz istehsalımız olan bu kabel 300/500 V nominal gərginliyə, 2x0.75 mm2
          ölçüyə malikdir. Uzunluğu isə 100 metrdir.
        </p>
      </div>
      <div className={styles.blueSectionBlue2Box} data-aos="fade-down-left">
        <h5>BCG Kabel</h5>
        <p>
          Öz istehsalımız olan bu kabel 300/500 V nominal gərginliyə, 2x0.75 mm2
          ölçüyə malikdir. Uzunluğu isə 100 metrdir.
        </p>
      </div>
    </section>
  );
}

export default BlueSectionHome;
