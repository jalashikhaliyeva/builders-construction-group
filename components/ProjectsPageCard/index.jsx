import React from "react";
import styles from "./style/projectCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function ProjectsCards({ projectsInfo }) {
  const router = useRouter();

  const getCurrentLanguageSlug = (project) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return project[currentLanguage];
  };

  const goToProjectsDetail = (project) => {
    const projectId = getCurrentLanguageSlug(project.slug);
    console.log(projectId, "projectId");
    router.push(`${ROUTER.PROJECTS}/${projectId}`);
  };

  // Reverse the order of projects
  const reversedProjects = [...(projectsInfo?.project || [])].reverse();

  return (
    <div className={styles.projectCardSection}>
      {reversedProjects.map((project, index) => (
        <div
          key={index}
          onClick={() => goToProjectsDetail(project)}
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
              style={{ height: "373px", boxSizing: "border-box" , borderRadius:"8px" }}
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
