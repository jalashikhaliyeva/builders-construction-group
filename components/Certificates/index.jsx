import Image from "next/image";
import React from "react";
import styles from "./certificates.module.css";

function Certificates({ aboutInfo }) {
  const { certificates } = aboutInfo;
  if (!aboutInfo || !aboutInfo.certificates) {
    return <div>No certificates available</div>;
  }

  // const { certificates } = aboutInfo;
// 

  // console.log(aboutInfo, "aboutInfo certificates");

  return (
    <div className={styles.certificateContainer}>
      <h4>Sertifikatlarımız</h4>
      <div className={styles.certificatesImg} data-aos="fade-up">
        {certificates &&
          certificates.map((certificate, index) => (
            <Image
              key={index}
              className={styles.certificate}
              alt={`certificate${index + 1}`}
              src={certificate.image}
              width={250}
              height={578}
            />
          ))}
      </div>
      <button className={styles.certificatesBtn}>Daha çox</button>
    </div>
  );
}

export default Certificates;
