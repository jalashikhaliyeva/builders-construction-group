import Image from "next/image";
import React from "react";
import styles from "./section2Home.module.css";
import MissionsVision from "../MissionsVision";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function Section2Home({ homeInfo }) {
  const { push } = useRouter();
  console.log(homeInfo, "{homeInfo} section2 ");
  const data = homeInfo?.about;
  console.log(data, "data of Section2Home");

  const { title, image } = data;
  if (!title || !image) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div data-aos="fade-right" className={styles.section2Home}>
        <div className={styles.section2about}>
          <h1>{title}</h1>
          <button
            className={styles.sectionBtn}
            onClick={() => push(ROUTER.SERVICES)}
          >
            Ətraflı
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
      {/* <MissionsVision /> */}
    </>
  );
}

export default Section2Home;
