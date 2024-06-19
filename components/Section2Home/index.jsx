import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./section2Home.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function Section2Home({ homeInfo }) {
  const { push } = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const data = homeInfo?.about;

  if (!data || !ready || !isClient) {
    return <div>Loading...</div>;
  }

  const { title, image } = data;

  if (!title || !image) {
    return <div>Loading...</div>;
  }

  return (
    <div data-aos="fade-right" className={styles.section2Home}>
      <div className={styles.section2about}>
        <h1>{title}</h1>
        <button
          className={styles.sectionBtn}
          onClick={() => push(ROUTER.SERVICES)}
        >
          {t("ətraflı")}
        </button>
      </div>
      <div className={styles.section2img}>
        <Image
          className={styles.imgMission}
          src={image}
          alt="section2image"
          width={845}
          height={616}
        />
      </div>
    </div>
  );
}

export default Section2Home;
