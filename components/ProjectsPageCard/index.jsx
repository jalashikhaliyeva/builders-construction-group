import React, { useState, useEffect } from "react";
import styles from "./style/projectCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function ProjectsCards({ projectsInfo }) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getCurrentLanguageSlug = (project) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return project[currentLanguage];
  };

  const goToProjectsDetail = (project) => {
    const projectId = getCurrentLanguageSlug(project.slug);
    router.push(`${ROUTER.PROJECTS}/${projectId}`);
  };

  // Reverse the order of projects
  const reversedProjects = [...(projectsInfo?.project || [])].reverse();

  if (!isClient) return null;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = reversedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(reversedProjects.length / projectsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className={styles.projectCardSection}>
      {currentProjects.map((project, index) => (
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
              style={{
                height: "373px",
                boxSizing: "border-box",
                borderRadius: "8px",
              }}
              src={project.image}
              width={240}
              height={373}
            />
          </div>
        </div>
      ))}

      {reversedProjects.length > projectsPerPage && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </button>
          <span className={styles.pageInfo}>
            {currentPage} / {totalPages}
          </span>
          <button
            className={styles.pageButton}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsCards;
