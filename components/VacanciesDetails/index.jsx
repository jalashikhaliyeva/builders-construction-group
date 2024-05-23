import React from "react";
import styles from "./vacanciesDetail.module.css";

const VacancyDetails = () => {
  const vacancy = {
    name: "Software Developer",
    lastApplicationDate: "June 30, 2024",
    responsibilities: [
      "Strong coding skills",
      "Strong communication",
      "20-30 years old",
      "2-3 years of experience",
      "Experience with React and Node.js",
      "Team player and problem solver",
    ],
  };

  return (
    <div className={styles.vacancyDetails} data-aos="fade-right">
      <h2>{vacancy.name}</h2>
      <p>Last Application Date: {vacancy.lastApplicationDate}</p>
      <h3>Responsibilities</h3>
      <ul>
        {vacancy.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <h6>
        Vakansiya ilə bağlı müraciət etmək istəyən namizdələr CV-ni test@gmail
        elektron ünvanına, Subject/Mövzu hissəsində vəzifənin adını qeyd etməklə
        göndərə bilərlər.
      </h6>
      <button>CV Göndər</button>
    </div>
  );
};

export default VacancyDetails;
