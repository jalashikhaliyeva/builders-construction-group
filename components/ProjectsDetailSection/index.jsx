import React, { useState } from "react";
import { ROUTER } from "../../constant/router";
import { useRouter } from "next/router";
import styles from "./style/projectsDetail.module.css";
import Image from "next/image";

function ProjectsDetailSection() {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const projectDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `;

  const truncatedText = projectDescription.slice(0, 800);
  const { push } = useRouter();
  return (
    <>
      <div className={styles.projectDetailSection}>
        <div className={styles.projectDetailCardSection}>
          <p>Layihə 2: </p>
          <p>Kateqoriya:</p>
          <p>Location:</p>
          <p>Son vəziyyət:</p>
        </div>
        <Image
          src="/images/aboutSectImg.jpg"
          height={600}
          width={850}
          alt="projectDetailImg"
        />
      </div>
      <p className={styles.projectDetailDescription}>
        {showFullText ? projectDescription : truncatedText}
        {projectDescription.length > 200 && (
          <span
            onClick={toggleText}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {showFullText ? " ... Show less" : " ... Show more"}
          </span>
        )}
      </p>
      <button
        onClick={() => push(ROUTER.PROJECTS)}
        className={styles.projectDetailBtn}
      >
        Geri
      </button>
    </>
  );
}

export default ProjectsDetailSection;

{
  /* <button onClick={() => push(ROUTER.PROJECTS)}>Geri</button> */
}
