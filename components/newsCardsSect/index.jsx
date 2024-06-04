import Image from "next/image";
import styles from "./style/newsCards.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "../../shared/constant/router";

function NewsCards() {
  const router = useRouter();
  const goToNewsDetail = () => {
    const newsId = "22"; //bu backendden deyisen ID olacag
    router.push(`${ROUTER.NEWS}/${newsId}`);
  };
  return (
    <section className={styles.newsCardsSect}>
      <div className={styles.newsCard}>
        <div className={styles.newsCardDescription}>
          <h6>31.04.2024</h6>
          <h3>Qarabağda yeni layihəyə start verdik.</h3>
          <h4>BCG group</h4>
          <p>
            “Through compassionate guidance and a tailored approach, the
            psychologists at this practice helped me rediscover my inner
            strength. Their support was instrumental in my journey towards
            healing and self-empowerment”
          </p>
          <button onClick={goToNewsDetail}>Tam xəbəri oxu</button>
        </div>
        <Image
          className={styles.newsCardImg}
          src="/images/newsCardSect.jpg"
          width={600}
          height={430}
        />
      </div>
      <div className={styles.newsCard}>
        <div className={styles.newsCardDescription}>
          <h6>30.04.2024</h6>
          <h3>Yeni partnyorluqlarımız ilə dahada gücləndik</h3>
          <h4>BCG group</h4>
          <p>
            “Through compassionate guidance and a tailored approach, the
            psychologists at this practice helped me rediscover my inner
            strength. Their support was instrumental in my journey towards
            healing and self-empowerment”
          </p>
          <button onClick={goToNewsDetail}>Tam xəbəri oxu</button>
        </div>
        <div className={styles.newsCardImg}>
          <Image
            style={{ objectFit: "contain" }}
            src="/images/newsCardSect2.jpg"
            width={600}
            height={430}
          />
        </div>
      </div>
      <div className={styles.newsCard}>
        <div className={styles.newsCardDescription}>
          <h6>29.04.2024</h6>
          <h3>Qarabağda yeni layihəyə start verdik.</h3>
          <h4>BCG group</h4>
          <p>
            “Through compassionate guidance and a tailored approach, the
            psychologists at this practice helped me rediscover my inner
            strength. Their support was instrumental in my journey towards
            healing and self-empowerment”
          </p>
          <button onClick={goToNewsDetail}>Tam xəbəri oxu</button>
        </div>
        <Image
          className={styles.newsCardImg}
          style={{ objectFit: "contain" }}
          src="/images/newsCardSect3.jpg"
          width={600}
          height={430}
        />
      </div>
    </section>
  );
}

export default NewsCards;
