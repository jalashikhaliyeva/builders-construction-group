import React, { useEffect, useState } from "react";
import styles from "./vacanciesDetail.module.css";
import { getVacancyInfoDetail } from "@/services/vacancyDetail";
import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

const VacancyDetails = () => {
  const [vacancyDetail, setVacancyDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("lang") || "az";
        if (!query.id) {
          setError("Invalid vacancy ID.");
          setLoading(false);
          return;
        }
        const response = await getVacancyInfoDetail(query?.id, lang);
        console.log(response, "responseTeam");

        if (response && response.data) {
          setVacancyDetail(response.data);
          setError(null);
        } else {
          console.error("Invalid response format:", response);
          setError("Invalid response from server. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching vacancy details:", error);
        setError("Failed to fetch vacancy details. Please try again later.");
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

  if (!vacancyDetail) {
    return <p>No data found for this vacancy.</p>;
  }

  const { title, last_date, desc, short_desc } = vacancyDetail;

  const handleSendEmail = () => {
    const subject = `Application for ${title}`;
    const body = `I would like to apply for the position of ${title}. Please find my CV attached.`;
    const mailtoLink = `mailto:firengizsariyeva77@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.vacancyDetails}>
      <h2>{title}</h2>
      <p>Son müraciət tarixi: {last_date}</p>
      <h3>Gözləntilər</h3>
      <div dangerouslySetInnerHTML={{ __html: desc }} />
      <h6>{short_desc}</h6>
      <button onClick={handleSendEmail}>CV Göndər</button>
    </div>
  );
};

export default VacancyDetails;
