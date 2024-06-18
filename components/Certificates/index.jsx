import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./certificates.module.css";
import { useTranslation } from "next-i18next";

function Certificates({ aboutInfo }) {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  const { certificates } = aboutInfo;
  if (!aboutInfo || !aboutInfo.certificates) {
    return <div>No certificates available</div>;
  }

  return (
    <div className={styles.certificateContainer}>
      <h4>{t("sertifikatlarımız")}</h4>
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
      <button className={styles.certificatesBtn}>{t("ətraflı")}</button>
    </div>
  );
}

export default Certificates;
