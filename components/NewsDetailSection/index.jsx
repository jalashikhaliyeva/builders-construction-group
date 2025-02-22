import React, { useEffect, useState } from "react";
import styles from "./newsDetail.module.css";
import Image from "next/image";
import { ROUTER } from "../../shared/constant/router";
import { useRouter } from "next/router";
import { getNewsDetail } from "@/services/newsDetail";
import { Flex, Spinner } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";

function NewsDetailSection() {
  const { push } = useRouter();
  const [newsDetail, setNewsDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { t, ready } = useTranslation();
  const { query } = router;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("lang") || "az"; // Get the language from localStorage or default to "az"
        const response = await getNewsDetail(query?.id, lang);

        if (response && response.data) {
          setNewsDetail(response?.data);
          setError(null);
        } else {
          console.error("Invalid response format:", response);
          setError("Invalid response from server. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching news details:", error);
        setError("Failed to fetch news details. Please try again later.");
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

  if (!newsDetail) {
    return <p>No data found for this news item.</p>;
  }

  const {
    title,
    desc,
    image,
    created_at,
    tags,
    meta_title,
    meta_description,
    meta_keywords,
  } = newsDetail;

  return (
    <>
      <Head>
        <title>{meta_title || title}</title>
        <meta name="description" content={meta_description || desc} />
        <meta name="keywords" content={meta_keywords || ""} />
      </Head>
      <div className={styles.newsDetailSection}>
        <div className={styles.aboutSectContainer}>
          <div className={styles.aboutSectImage}>
            <img
              style={{
                borderRadius: "12px",
                objectFit: "cover",
                width:"100%",
                height:"550px"
              }}
              src={image || "/images/newsTitleImg.jpg"}
          
              alt={title}
            />
          </div>
          <div className={styles.aboutSectBox} data-aos="fade-right">
            <h2>{title}</h2>
            <div
              style={{
                display: "flex",
                gap: "29px",
                marginTop: "26px",
              }}
            >
              <h6>{created_at}</h6>
              <h5>BCG group</h5>
            </div>
          </div>
        </div>

        <div className={styles.newsDetailDescription}>
          <div dangerouslySetInnerHTML={{ __html: desc }} />

          <div>
            {tags && tags.length > 0 && (
              <p>
                {tags.map((tag, index) => (
                  <span
                    style={{ cursor: "pointer" }}
                    onMouseOver={(e) => (e.target.style.color = "blue")}
                    onMouseOut={(e) => (e.target.style.color = "initial")}
                    key={index}
                  >
                    #{tag.title}
                    {index < tags.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            )}
          </div>

          <button
            style={{ marginBottom: "50px" }}
            onClick={() => push(ROUTER.NEWS)}
          >
            {t("geri")}
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsDetailSection;
