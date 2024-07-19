import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./style/projectsDetail.module.css";
import { getProjectsInfoDetail } from "@/services/projectDetail";
import { Flex, Spinner } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import EmblaCarousel from "./EmblaCarousel"; 
import VideoComponent from "../VideoComponent";

function ProjectsDetailSection() {
  const router = useRouter();
  const { query } = router;
  const [projectDetail, setProjectDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

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

  const {
    desc,
    category,
    location,
    status,
    image,
    images,
    country,
    link,
    meta_title,
    meta_description,
    meta_keywords,
  } = projectDetail;

  const imageUrls = images.map((img) => img.image);
  const OPTIONS = {};
  const IMAGES = [image, ...imageUrls];

  return (
    <>
      <Head>
        <title>{meta_title}</title>
        <meta name="description" content={meta_description || desc} />
        <meta name="keywords" content={meta_keywords || ""} />
      </Head>

      <div className={styles.projectDetailSection}>
        <EmblaCarousel slides={IMAGES} options={OPTIONS} />

        <div className={styles.projectDetailCardSection}>
          <p>{t("Layihə")}: {projectDetail.title}</p>
          <p>{t("Məkan")}: {country}</p>
          <p>{t("Son vəziyyət")}: {status}</p>
        </div>
      </div>
      <p className={styles.projectDetailDescription} dangerouslySetInnerHTML={{ __html: desc }}></p>

      <VideoComponent iframeLink={projectDetail.link} backgroundImage={image} />
    </>
  );
}

export default ProjectsDetailSection;
