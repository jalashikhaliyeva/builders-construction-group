import React, { useEffect, useState } from "react";
import styles from "./servicesPageBoxes.module.css";
import Image from "next/image";
import style from "../ServicesPageSection1/servicesPage.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function ServicesPageBoxes({ servicesInfo }) {
  const [isClient, setIsClient] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { service = {} } = servicesInfo || {};
  const { attributes = [] } = service;

  const [hoveredBox, setHoveredBox] = useState("İşçi briqada");
  const [selectedBox, setSelectedBox] = useState(0);
  const [boxBackgroundColor, setBoxBackgroundColor] = useState(
    "var(--projectBoxGray)"
  );

  const handleClick = (index, text) => {
    setSelectedBox(index);
    setHoveredBox(text);
    setBoxBackgroundColor("var(--mainBlue)");
  };

  const handleMouseEnter = (text, color) => {
    setHoveredBox(text);
    setBoxBackgroundColor(color);
  };

  const handleMouseLeave = () => {
    setHoveredBox("İşçi briqada");
    setBoxBackgroundColor("var(--projectBoxGray)");
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  if (!isClient) {
    return null;
  }

  const getCurrentLanguageSlug = (attribute) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return attribute.slug[currentLanguage];
  };

  const goToServicesDetail = (slug) => {
    router.push(`/services/${slug}`);
  };

  return (
    <section className={styles.servicesBoxContainer}>
      <div className={styles.aboutSectContainer}>
        <div className={style.aboutSectContainer}>
        <div className={style.aboutSectImage}>
            <Image
              style={{ width: "990px", height: "530px", borderRadius: "18px", objectFit:"cover" }}
              src={service.image || "/default-image.png"}
              width={1000}
              height={900}
              alt="Service Image"
            />
          </div>
          <div className={style.aboutSectBox} data-aos="fade-right">
            <h2>{service.name || "Service Name"}</h2>
            <p
              style={{ fontSize: "16px", lineHeight: "26px" }}
              dangerouslySetInnerHTML={{
                __html: truncateText(
                  service.desc || "Service Description",
                  250
                ),
              }}
            ></p>
          </div>
   
        </div>
      </div>

      <div className={styles.servicesBoxes}>
        {attributes.map((attribute, index) => (
          <div
            key={index}
            className={`${styles.servicesBox} ${
              selectedBox === index
                ? styles.selected
                : hoveredBox === attribute.key
                ? styles.hovered
                : ""
            }`}
            onClick={() => handleClick(index, attribute.key)}
            onMouseEnter={() =>
              handleMouseEnter(attribute.key, "var(--mainBlue)")
            }
            onMouseLeave={() => handleMouseLeave()}
          >
            <p className={styles.boxDesc}>[ {index + 1} ]</p>
            <Image
              src={attribute.image || "/default-icon.png"}
              width={100}
              height={100}
              alt={`Service Icon ${index + 1}`}
            />
            <h6>{attribute.key}</h6>
          </div>
        ))}
      </div>

      <div
        className={styles.servicesBoxDescription}
        style={{
          backgroundColor:
            selectedBox !== null && selectedBox % 2 === 0
              ? "var(--mainBlue)"
              : "var(--projectBoxGray)",
        }}
      >
        {selectedBox !== null && attributes[selectedBox] && (
          <>
            <h6>{attributes[selectedBox].key}</h6>
            <div className={style.serviceDescriptionSect}>
            <p>{attributes[selectedBox].value.length > 800 ? attributes[selectedBox].value.substring(0, 800) + '...' : attributes[selectedBox].value}</p>

   
              <button
              style={{backgroundColor:"#303d49" , color:"#fff", border:"1px solid", borderRadius:"8px", padding:"12px", marginTop:"14px"}}
                className={style.buttonReadMore}
                onClick={() =>
                  goToServicesDetail(
                    getCurrentLanguageSlug(attributes[selectedBox])
                  )
                }
              >
                {t("ətraflı")}
              </button>
              </div>
           
          </>
        )}
      </div>
    </section>
  );
}

export default ServicesPageBoxes;
