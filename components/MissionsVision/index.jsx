import React from 'react'
import styles from './missions.module.css'
import Image from 'next/image'

function MissionsVision() {
  return (
    <div className={styles.section2HomeMissions}>
    <div className={styles.section2HomeMissionImg}>
      <Image
        src="/images/section2HomeMissions.jpg"
        alt="section2HomeMission"
        width={457}
        height={347}
      />
    </div>

    <div className={styles.homeMissionsText}>
      <p className={styles.homeMissionsTitle}>MİSİYAMIZ</p>
      <p className={styles.homeMissionsDesc}>
        Müştərilərimizə daima yenilikçi və effektiv həllər təqdim edərək
        onların nailiyyətlərini inkişaf etdirməyə kömək etmək.
      </p>
    </div>

    <div className={styles.homeVisionText}>
      <p className={styles.homeMissionsTitle}>VİZYONUMUZ</p>
      <p className={styles.homeMissionsDesc}>
        Şirkətimiz, yeniliklərimiz və yaradıcı həllərimizlə dünyanın müştəri
        məmnuniyyəti üzrə lider şirkətlərindən biri olmağı və insanlar üçün
        faydalı dəyişikliklər yaratmağı hədəfləyir.
      </p>
    </div>
  </div>
  )
}

export default MissionsVision