import React from "react";
import styles from "./style/aboutSect1.module.css";
import Image from "next/image";
import MissionsVision from "../MissionsVision";

function AboutUs({ aboutInfo }) {
  console.log('data -> : ',aboutInfo?.about?.desc);
  return (
    <div className={styles.aboutSectionFirst}>
      <div className={styles.aboutSectContainer}>
        <div className={styles.aboutSectBox} data-aos="fade-right">
          <h2>{aboutInfo?.about?.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: aboutInfo?.about?.desc }} />
        </div>
        <div className={styles.aboutSectImage}>
          {aboutInfo?.about?.image && (
            <Image
              src={aboutInfo.about.image}
              width={1000}
              height={900}
              alt="About Section Image"
            />
          )}
        </div>
      </div>

      <div className={styles.missionVisionAbout}>
        {/* <MissionsVision aboutInfo={aboutInfo} /> */}
      </div>
    </div>
  );
}

export default AboutUs;
