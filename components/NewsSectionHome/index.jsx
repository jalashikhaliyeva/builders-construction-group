import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./style/newsSection.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function NewsSectionHome({ homeInfo }) {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation();
  useEffect(() => {
    setIsClient(true);
  }, []);
  const data = homeInfo.blogs;
  console.log(homeInfo.blogs, "homeInfo, news section ");

  const { push } = useRouter();
  if (!isClient) {
    return null; // or a loading spinner, placeholder, etc.
  }
  return (
    <>
      <div className={styles.titleSection}>
        <h3> {t("xəbərlər")}</h3>
        <button onClick={() => push(ROUTER.NEWS)}>{t("hamısını gör")}</button>
      </div>

      <div className={styles.newsSectionBoxes}>
        {data.map((item, index) => (
          <div
          onClick={() => push(ROUTER.NEWS)}
            key={index}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            className={styles.newsSectionBox}
          >
            <h6>{item.created_at}</h6>
            <h4>{item.title}</h4>
            <h5>BCG group</h5>
            <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
          </div>
        ))}
        <Image
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
