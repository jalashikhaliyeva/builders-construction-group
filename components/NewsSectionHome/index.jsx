import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./style/newsSection.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function NewsSectionHome({ homeInfo }) {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation();
  const { locale, push } = useRouter();

  useEffect(() => {
    setIsClient(true);
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
        <button onClick={() => push(ROUTER.NEWS)}>{t("hamısını gör")}</button>
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
              dangerouslySetInnerHTML={{ __html: truncateText(item.desc, 400) }}
            ></p>
          </div>
        ))}
       
        <Image
         data-aos="flip-left"
         data-aos-easing="ease-out-cubic"
         data-aos-duration="2000"
          className={styles.newsImageSect}
          src="/images/newsSectionImg.jpg"
          width={720}
          height={362}
          objectFit="cover"
        />
      </div>
    </>
  );
}

export default NewsSectionHome;
