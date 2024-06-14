import React, { useEffect, useState } from "react";
import styles from "./style/services.module.css";
import Image from "next/image";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";

function ServicesHome({ aboutInfo }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  
  console.log(aboutInfo, "aboutInfo");
  const { push } = useRouter();
  const { service } = aboutInfo;
  const { attributes, image } = service; // Destructure image from service
  if (!isClient) {
    return null; // or a loading spinner, placeholder, etc.
  }
  return (
    <div>
      <div className={styles.services}>
        <h3>Xidmətlərimiz</h3>
        <button onClick={() => push(ROUTER.SERVICES)}>Ətraflı</button>
      </div>

      <div className={styles.servicesCardsContainer}>
        <div className={styles.servicesCardsImg}>
          <Image
            src={image} // Use the image from the API
            width={587}
            height={786}
            alt="servicesImgHome"
            objectFit="cover"
          />
        </div>

        <div className={styles.servicesCards}>
          {attributes &&
            attributes.map((attribute, index) => (
              <div className={styles.servicesCard2} key={index}>
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
    </div>
  );
}

export default ServicesHome;
