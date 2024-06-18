import React, { useEffect, useState } from "react";
import styles from "./vacancies.module.css";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { useTranslation } from "next-i18next";

function Vacancies({ vacancyInfo }) {
  console.log(vacancyInfo, "vacancyInfo");
  const { t, ready } = useTranslation();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

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

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

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
          <button className={styles.applyButton}>{t("müraciət Et")}</button>
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
