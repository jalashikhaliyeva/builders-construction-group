import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./certificates.module.css";
import { useTranslation } from "next-i18next";
import EmblaCarousel from "embla-carousel";
const options = {
  loop: true,
};
function Certificates({ aboutInfo }) {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!ready || !isClient) return null;

  const { certificates } = aboutInfo;
  if (!aboutInfo || !aboutInfo.certificates) {
    return <div>No certificates available</div>;
  }

  return (
    <div className={styles.certificateContainer}>
      <h4>{t("sertifikatlarımız")}</h4>
      {/* <div className={styles.certificatesImg} data-aos="fade-up"> */}
        {/* {certificates &&
          certificates.map((certificate, index) => (
            <Image
              key={index}
              className={styles.certificate}
              alt={`certificate${index + 1}`}
              src={certificate.image}
              width={250}
              height={578}
            />
          ))} */}
        {/* <EmblaCarousel
          slides={certificates.map((slide) => slide?.image)}
          options={options}
          imageClassName="secondCarousel__image"
        /> */}
      {/* </div> */}
      <button className={styles.certificatesBtn}></button>
    </div>
  );
}

export default Certificates;
