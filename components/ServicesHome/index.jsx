import React, { useEffect, useState } from "react";
import styles from "./style/services.module.css";
import Image from "next/image";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function ServicesHome({ aboutInfo }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // console.log(aboutInfo, "aboutInfo");
  const { push } = useRouter();
  const { service } = aboutInfo;
  const { attributes, image } = service; // Destructure image from service
  const { t, ready } = useTranslation();
  if (!isClient) {
    return null; // or a loading spinner, placeholder, etc.
  }
  return (
    <div>
      <div className={styles.services}>
        <h3>{t("xidmətlərimiz")}</h3>
      </div>

      <div className={styles.servicesCardsContainer}>
        <div className={styles.servicesCardsImg}>
          <Image
            src={image} 
            width={587}
            height={786}
            alt="servicesImgHome"
            objectFit="cover"
          />
        </div>

        <div className={styles.servicesCards}>
          {attributes &&
            attributes.map((attribute, index) => (
              <div style={{cursor:"pointer"}} onClick={() => push(ROUTER.SERVICES)} className={styles.servicesCard2} key={index}>
                <h6>[ {String(index + 1).padStart(2, "0")} ]</h6>
                <Image
                  className={styles.servicesCardImg}
                  src={attribute.image}
                  width={100}
                  height={100}
                  alt={`serviceImage${index + 1}`}
                />
                <h4>{attribute.key || "Service Title"}</h4>
              </div>
            ))}
        </div>
      </div>
      <button className={styles.buttonServ} onClick={() => push(ROUTER.SERVICES)}>{t("ətraflı")}</button>

    </div>
  );
}

export default ServicesHome;
