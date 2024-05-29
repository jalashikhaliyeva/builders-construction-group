import React from "react";
import styles from "./style/aboutSect1.module.css";
import Image from "next/image";
import MissionsVision from "../MissionsVision";

function AboutUs() {
  return (
    <div className={styles.aboutSectionFirst}>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox}  data-aos="fade-right">
          <h2>Biz kimik?</h2>
          <p>
            BUİLDİNGS CONSTRUCTİON GROUP 2022-ci ildə Azərbaycanın paytaxtı olan
            Bakı şəhərində Fəaliyyətə başlayıb. Şirkətin fəaliyyət istiqamətləri
            hazırda optik kabellərin çəkilməsi, nişan dirəklərinin istehsalı və
            quraşdırılması və işçi briqada ilə təmin etməkdən ibarətdir. Şirkət
            peşəkar, məsuliyyətli və gülərüz mütəxəssislərdən ibarət kollektiv
            tərəfindən təşkil olunub və xidmət göstərir.
          </p>
        </div>
        <div className={styles.aboutSectImage}>
          <Image src="/images/aboutSectImg.jpg" width={1000} height={900} alt="aboutSectImg" />
        </div>
      </div>
   
   <div className={styles.missionVisionAbout}>
      <MissionsVision />
      </div>
    </div>
  );
}

export default AboutUs;
