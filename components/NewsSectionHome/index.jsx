import React from "react";
import styles from "./style/newsSection.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";

function NewsSectionHome() {
  const { push } = useRouter();
  return (
    <>
      <div className={styles.titleSection}>
        <h3>Xəbərlər</h3>
        <button onClick={() => push(ROUTER.NEWS)}>Hamısını gör</button>
      </div>

      <div className={styles.newsSectionBoxes}>
        <div className={styles.newsSectionBox}>
          <h6>22.04.2024</h6>
          <h4>Qarabağda yeni layihəyə start verdik.</h4>
          <h5>BCG group</h5>
          <p>
            Through compassionate guidance and a tailored approach, the
            psychologists at this practice helped me rediscover my inner
            strength. Their support was instrumental in my journey...
          </p>
        </div>
        <div className={styles.newsSectionBox}>
          <h6>22.04.2024</h6>
          <h4>Yeni partnyorluqlarımız ilə dahada gücləndik</h4>
          <h5>BCG group</h5>
          <p>
            Through compassionate guidance and a tailored approach, the
            psychologists at this practice helped me rediscover my inner
            strength. Their support was instrumental in my journey...
          </p>
        </div>

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
