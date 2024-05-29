import Image from "next/image";
import React from "react";
import styles from "./certificates.module.css";

function Certificates() {
  return (
    <div className={styles.certificateContainer}>
      <h4>Sertifikatlarımız</h4>
      <div className={styles.certificatesImg} data-aos="fade-up">
        <Image
          className={styles.certificate}
          alt="certificate1"
          src="/images/certificate1.jpg"
          width={250}
          height={578}
        />
        <Image
          className={styles.certificate}
          alt="certificate2"
          src="/images/certificate2.jpg"
          width={450}
          height={578}
        />
        <Image
          className={styles.certificate}
          alt="certificate3"
          src="/images/certificate3.jpg"
          width={450}
          height={578}
        />
      </div>
      <button className={styles.certificatesBtn}>Daha çox</button>
    </div>
  );
}

export default Certificates;
