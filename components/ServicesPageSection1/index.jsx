import React from "react";
import styles from "./servicesPage.module.css";
import Image from "next/image";
function ServicesSectionFirst() {
  return (
    <>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox}>
          <h2>Optik kabellərin çəkilməsi</h2>
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
          <Image
            src="/images/servicesPageSect1.jpg"
            width={1000}
            height={900}
          />
        </div>
      </div>
    </>
  );
}

export default ServicesSectionFirst;
