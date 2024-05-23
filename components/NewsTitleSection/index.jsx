import styles from "./newsTitle.module.css";
import Image from "next/image";

function NewsTitleSection() {
  return (
    <>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox} data-aos="fade-right">
          <h2>Xəbərlər</h2>
          <p>
            Şirkətimiz haqqında ən son məlumatları oxuya və sahəyə tətbiq
            etdiyimiz innovasiyalar ilə bağlı daha çox məlumat əldə bilərsiz.
            Həmçinin yeni əməkdaşlıqlarımız və s. hqqında ən son xəbərləri daha
            əlçatan etdik.
          </p>
        </div>
        <div className={styles.aboutSectImage}>
          <Image src="/images/newsTitleImg.jpg" width={1000} height={900} />
        </div>
      </div>
    </>
  );
}

export default NewsTitleSection;
