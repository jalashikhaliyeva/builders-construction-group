import React from "react";
import styles from "./style/services.module.css";
import Image from "next/image";
import { ROUTER } from "@/constant/router";
import { useRouter } from "next/router";

function ServicesHome() {
  const { push } = useRouter();
  return (
    <div>
      <div className={styles.services}>
        <h3>Xidmətlərimiz</h3>
        <button onClick={() => push(ROUTER.SERVICES)}>Ətraflı</button>
      </div>

      <div className={styles.servicesCardsContainer}>
        <div className={styles.servicesCardsImg}>
          <Image
            src="/images/servicesHomeMan.svg"
            width={587}
            height={786}
            alt="servicesImgHome"
            objectFit="cover"
          />
        </div>

        <div className={styles.servicesCards}>
          <div>
            <div className={styles.servicesCard1}>
              <h6>[ 01 ]</h6>
              <Image
                className={styles.servicesCardImg}
                src="/images/servicesIconHome1.svg"
                width={100}
                height={100}
              />

              <h4>Optik kabellərin çəkilməsi</h4>
            </div>
            <div className={styles.servicesCard1}>
              <h6>[ 02 ]</h6>
              <Image
                className={styles.servicesCardImg}
                src="/images/servicesIconHome2.svg"
                width={100}
                height={100}
              />

              <h4>Optik kabellərin çəkilməsi</h4>
            </div>
          </div>

          <div>
            <div className={styles.servicesCard2}>
              <h6>[ 03 ]</h6>
              <Image
                className={styles.servicesCardImg}
                src="/images/servicesIconHome3.svg"
                width={100}
                height={100}
              />

              <h4>Optik kabellərin çəkilməsi</h4>
            </div>
            <div className={styles.servicesCard2}>
              <h6>[ 04 ]</h6>
              <Image
                className={styles.servicesCardImg}
                src="/images/servicesIconHome4.svg"
                width={100}
                height={100}
              />

              <h4>Optik kabellərin çəkilməsi</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServicesHome;
