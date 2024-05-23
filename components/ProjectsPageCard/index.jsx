import React from "react";
import styles from "./style/projectCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";

function ProjectsCards() {
  const router = useRouter();
  const goToProjectsDetail = () => {
    const projectId = "22"; //bu backendden deyisen ID olacag
    router.push(`${ROUTER.PROJECTS}/${projectId}`);
  };
  return (
    <div className={styles.projectCardSection}>
      <div
        onClick={goToProjectsDetail}
        style={{ cursor: "pointer" }}
        className={styles.projectsCards}
      >
        <div className={styles.projectCard}>
          <h5>Layihə 1</h5>
          <h6>Təhvil verilmişdir</h6>
          <p>
            İş prosesi müddətində 600 dirək və 24000 metr uzunluqda ümumi
            naqildən istifadə edilmişdir. Planlama və xammal təchizatı
            tərəfimizdən olunmuşdur.
          </p>
        </div>
        <div className={styles.projectCardImg}>
          <Image
            style={{ height: "373px", boxSizing: "border-box" }}
            src="/images/newsCardSect2.jpg"
            width={240}
            height={373}
          />
        </div>
      </div>
      <div
        onClick={goToProjectsDetail}
        style={{ cursor: "pointer" }}
        className={styles.projectsCards}
      >
        <div className={styles.projectCard}>
          <h5>Layihə 1</h5>
          <h6>Təhvil verilmişdir</h6>
          <p>
            İş prosesi müddətində 600 dirək və 24000 metr uzunluqda ümumi
            naqildən istifadə edilmişdir. Planlama və xammal təchizatı
            tərəfimizdən olunmuşdur.
          </p>
        </div>
        <div className={styles.projectCardImg}>
          <Image
            style={{ height: "373px", boxSizing: "border-box" }}
            src="/images/projectSlide1.jpg"
            width={240}
            height={373}
          />
        </div>
      </div>
      <div
        onClick={goToProjectsDetail}
        style={{ cursor: "pointer" }}
        className={styles.projectsCards}
      >
        <div className={styles.projectCard}>
          <h5>Layihə 1</h5>
          <h6>Təhvil verilmişdir</h6>
          <p>
            İş prosesi müddətində 600 dirək və 24000 metr uzunluqda ümumi
            naqildən istifadə edilmişdir. Planlama və xammal təchizatı
            tərəfimizdən olunmuşdur.
          </p>
        </div>
        <div className={styles.projectCardImg}>
          <Image
            style={{ height: "373px", boxSizing: "border-box" }}
            src="/images/newsCardSect.jpg"
            width={240}
            height={373}
          />
        </div>
      </div>
      <div
        onClick={goToProjectsDetail}
        style={{ cursor: "pointer" }}
        className={styles.projectsCards}
      >
        <div className={styles.projectCard}>
          <h5>Layihə 1</h5>
          <h6>Təhvil verilmişdir</h6>
          <p>
            İş prosesi müddətində 600 dirək və 24000 metr uzunluqda ümumi
            naqildən istifadə edilmişdir. Planlama və xammal təchizatı
            tərəfimizdən olunmuşdur.
          </p>
        </div>
        <div className={styles.projectCardImg}>
          <Image
            style={{ height: "373px" }}
            src="/images/newsCardSect2.jpg"
            width={240}
            height={373}
          />
        </div>
      </div>
      <div
        onClick={goToProjectsDetail}
        style={{ cursor: "pointer" }}
        className={styles.projectsCards}
      >
        <div className={styles.projectCard}>
          <h5>Layihə 1</h5>
          <h6>Təhvil verilmişdir</h6>
          <p>
            İş prosesi müddətində 600 dirək və 24000 metr uzunluqda ümumi
            naqildən istifadə edilmişdir. Planlama və xammal təchizatı
            tərəfimizdən olunmuşdur.
          </p>
        </div>
        <div className={styles.projectCardImg}>
          <Image
            style={{ height: "373px" }}
            src="/images/newsCardSect2.jpg"
            width={240}
            height={373}
          />
        </div>
      </div>
      <div
        onClick={goToProjectsDetail}
        style={{ cursor: "pointer" }}
        className={styles.projectsCards}
      >
        <div className={styles.projectCard}>
          <h5>Layihə 1</h5>
          <h6>Təhvil verilmişdir</h6>
          <p>
            İş prosesi müddətində 600 dirək və 24000 metr uzunluqda ümumi
            naqildən istifadə edilmişdir. Planlama və xammal təchizatı
            tərəfimizdən olunmuşdur.
          </p>
        </div>
        <div className={styles.projectCardImg}>
          <Image
            style={{ height: "373px" }}
            src="/images/newsCardSect2.jpg"
            width={240}
            height={373}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsCards;
