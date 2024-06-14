import React from "react";
import styles from "./vacancies.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function Vacancies({ vacancyInfo }) {
  console.log(vacancyInfo, "vacancyInfo");

  const router = useRouter();

  const getCurrentLanguageSlug = (vacancySlug) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    // Ensure vacancySlug is an object before accessing its properties
    if (typeof vacancySlug === "object" && vacancySlug !== null) {
      return vacancySlug[currentLanguage];
    }
    return vacancySlug; // If it's not an object, return it directly
  };

  const goToVacancyDetail = (vacancy) => {
    const vacancyId = getCurrentLanguageSlug(vacancy.slug);
    console.log(vacancyId, "vacancyId");
    router.push(`${ROUTER.VACANCY}/${vacancyId}`);
  };

  const vacancies = vacancyInfo.vacancy;

  // Reverse the order of vacancies
  const reversedVacancies = [...(vacancies || [])].reverse();

  return (
    <div className={styles.vacanciesContainer}>
      {reversedVacancies.map((vacancy, index) => (
        <div
          onClick={() => goToVacancyDetail(vacancy)}
          key={index}
          className={styles.vacancyCard}
        >
          <div className={styles.vacancyInfo}>
            <h1>{vacancy.title}</h1>
            <p>{truncateText(vacancy.desc, 20)}</p>
            <h5>{vacancy.created_at}</h5>
          </div>
          <button className={styles.applyButton}>Müraciət et</button>
        </div>
      ))}
    </div>
  );
}

export default Vacancies;

function truncateText(text, maxLength) {
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
  if (strippedText.length > maxLength) {
    return strippedText.substring(0, maxLength) + "...";
  }
  return strippedText;
}
