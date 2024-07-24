import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./style/newsSection.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function NewsSectionHome({ homeInfo, staticNewsImg }) {
  const [isClient, setIsClient] = useState(false);
  const [truncateLength, setTruncateLength] = useState(200);
  const { t, ready } = useTranslation();
  const { locale, push } = useRouter();

  useEffect(() => {
    setIsClient(true);

    const updateTruncateLength = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1230 && screenWidth <= 1330) {
        setTruncateLength(40);
      } else {
        setTruncateLength(60);
      }
    };

    // Set the initial truncate length based on the current screen width
    updateTruncateLength();

    // Update the truncate length when the window is resized
    window.addEventListener("resize", updateTruncateLength);
    return () => {
      window.removeEventListener("resize", updateTruncateLength);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  const data = homeInfo.blogs;

  const getSlug = (item) => {
    switch (locale) {
      case "az":
        return item.slug.az;
      case "en":
        return item.slug.en;
      case "ru":
        return item.slug.ru;
      default:
        return item.slug.en;
    }
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return `${text.substring(0, limit)}...`;
    }
    return text;
  };

  return (
    <>
      <div className={styles.titleSection}>
        <h3>{t("xəbərlər")}</h3>
      </div>

      <div className={styles.newsSectionBoxes}>
        {data?.map((item, index) => (
          <div
            onClick={() => push(`${ROUTER.NEWS}/${getSlug(item)}`)}
            key={index}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            className={styles.newsSectionBox}
          >
            <h6>{item.created_at}</h6>
            <h4>{item.title}</h4>
            <h5>BCG group</h5>
            <p
              dangerouslySetInnerHTML={{
                __html: truncateText(item.desc, truncateLength),
              }}
            ></p>
          </div>
        ))}

        <Image
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={styles.newsImageSect}
          src={staticNewsImg}
          width={420}
          height={362}
          objectFit="cover"
          style={{ borderRadius: "16px" }}
        />
      </div>
      <button
        className={styles.responsiveBtn}
        onClick={() => push(ROUTER.NEWS)}
      >
        {t("hamısını gör")}
      </button>
      <button className={styles.webBtn} onClick={() => push(ROUTER.NEWS)}>
        {t("hamısını gör")}
      </button>
    </>
  );
}

export default NewsSectionHome;
