import React, { useEffect, useState } from "react";
import styles from "./teamDetail.module.css";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import { getTeamInfoDetail } from "@/services/teamDetails";
import { Flex, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Head from "next/head";

function TeamDetail() {
  const [teamDetail, setTeamDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { query } = router;
  console.log(query.id, "query");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("lang") || "az";
        if (!query.id) {
          setError("Invalid team member ID.");
          setLoading(false);
          return;
        }
        const response = await getTeamInfoDetail(query?.id, lang);
        console.log(response, "responseTeam");

        if (response && response.data) {
          setTeamDetail(response?.data);
          setError(null);
        } else {
          console.error("Invalid response format:", response);
          setError("Invalid response from server. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching team details:", error);
        setError("Failed to fetch team details. Please try again later.");
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

  if (!teamDetail) {
    return <p>No data found for this team member.</p>;
  }

  const {
    title,
    profession,
    desc,
    linkedin,
    instagram,
    image,
    meta_title,
    meta_description,
    meta_keywords,
  } = teamDetail;

  return (
    <>
      <Head>
        <title>{meta_title || title}</title>
        <meta name="description" content={meta_description || desc} />
        <meta name="keywords" content={meta_keywords || ""} />
      </Head>
      <div className={styles.teamDetailSect}>
        <div data-aos="flip-left" className={styles.card}>
          <Image src={image} alt="user1" layout="fill" objectFit="cover" />
        </div>
        <div data-aos="flip-right" className={styles.carDescMember}>
          <h3>{title}</h3>
          <h6>{profession}</h6>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: desc }} />
          <div style={{ display: "flex", gap: "15px" }}>
            <Link href={linkedin}>
              <FaLinkedin
                className={styles.linkedInIcon}
                style={{ height: "50px", width: "20px" }}
              />
            </Link>
            <Link href={instagram}>
              <FaInstagram
                className={styles.instagramIcon}
                style={{ height: "50px", width: "20px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamDetail;
