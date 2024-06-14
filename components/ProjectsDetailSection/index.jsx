import React, { useState, useEffect } from "react";
import { ROUTER } from "../../shared/constant/router";
import { useRouter } from "next/router";
import styles from "./style/projectsDetail.module.css";
import Image from "next/image";
import { getProjectsInfoDetail } from "@/services/projectDetail";
import { Flex, Spinner } from "@chakra-ui/react";

function ProjectsDetailSection() {
  const router = useRouter();
  const { query } = router;
  const [projectDetail, setProjectDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("lang") || "az";
        const response = await getProjectsInfoDetail(query.id, lang);

        if (response && response.data) {
          setProjectDetail(response.data);
          setError(null);
        } else {
          setError("Invalid response from server. Please try again later.");
        }
      } catch (error) {
        setError("Failed to fetch project details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (query.id) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [query.id]);

  if (loading) {
    return (
      <Flex height="50vh" alignItems="center" justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!projectDetail) {
    return <p>No data found for this project.</p>;
  }

  const { desc, category, location, status, image, country } = projectDetail;

  return (
    <>
      <div className={styles.projectDetailSection}>
        <div className={styles.projectDetailCardSection}>
          <p>Layihə 2: {projectDetail.title}</p>
          <p>Kateqoriya: {category}</p>
          <p>Location: {country}</p>
          <p>Son vəziyyət: {status}</p>
        </div>
        <Image src={image} height={600} width={850} alt="projectDetailImg" />
      </div>
      <p
        className={styles.projectDetailDescription}
        dangerouslySetInnerHTML={{ __html: desc }}
      ></p>
      <button
        onClick={() => router.push(ROUTER.PROJECTS)}
        className={styles.projectDetailBtn}
      >
        Geri
      </button>
    </>
  );
}

export default ProjectsDetailSection;
