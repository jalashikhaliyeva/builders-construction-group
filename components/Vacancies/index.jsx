import React from "react";
import styles from "./vacancies.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";

function Vacancies() {
  const router = useRouter();
  const goToVacancyDetail = () => {
    const vacancyId = "22"; //bu backendden deyisen ID olacag
    router.push(`${ROUTER.VACANCY}/${vacancyId}`);
  };
  const vacancyList = [
    {
      name: "Frontend Developer",
      description: "Develop user-facing features for our platform.",
      date: "Posted on: May 20, 2024",
    },
    {
      name: "Backend Developer",
      description: "Build and maintain server-side applications.",
      date: "Posted on: May 18, 2024",
    },
    {
      name: "SEO Specialist",
      description: "Optimize our website to improve search rankings.",
      date: "Posted on: May 17, 2024",
    },
    {
      name: "UI/UX Designer",
      description: "Design intuitive and engaging user interfaces.",
      date: "Posted on: May 15, 2024",
    },
  ];

  return (
    <div className={styles.vacanciesContainer}>
      {vacancyList.map((vacancy, index) => (
        <div
          onClick={goToVacancyDetail}
          key={index}
          className={styles.vacancyCard}
        >
          <div className={styles.vacancyInfo}>
            <h1>{vacancy.name}</h1>
            <p>{vacancy.description}</p>
            <h5>{vacancy.date}</h5>
          </div>
          <button className={styles.applyButton}>Müraciət et</button>
        </div>
      ))}
    </div>
  );
}

export default Vacancies;
