// components/ProjectsPageCard.js
import React from "react";
import styles from "./style/projectCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function ProjectsCards({ projectsInfo }) {
  console.log(projectsInfo, "projectsInfo first component");
  const router = useRouter();

  const goToProjectsDetail = (projectId) => {
    router.push(`${ROUTER.PROJECTS}/${projectId}`);
  };
  return (
    <div className={styles.projectCardSection}>
      {projectsInfo?.project?.map((project, index) => (
        <div
          key={index}
          onClick={() => goToProjectsDetail(project.slug)}
          style={{ cursor: "pointer" }}
          className={styles.projectsCards}
        >
          <div className={styles.projectCard}>
            <h5>{project.title}</h5>
            <h6>{project.country}</h6>
            <div dangerouslySetInnerHTML={{ __html: project.desc }}></div>
          </div>
          <div className={styles.projectCardImg}>
            <Image
              style={{ height: "373px", boxSizing: "border-box" }}
              src={project.image}
              width={240}
              height={373}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsCards;
