import React from "react";
import styles from "../ServicesPageSection1/servicesPage.module.css";
import Image from "next/image";
import style from "./responsiveEquipm.module.css"
function EquipmentsSectionFirst() {
  return (
    <div className={style.responsiveEquipment}>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox} data-aos="fade-right">
          <h2>Avadanlıqlarımız</h2>
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
          <Image src="/images/aboutSectImg.jpg" width={990} height={900} />
        </div>
      </div>
    </div>
  );
}

export default EquipmentsSectionFirst;
