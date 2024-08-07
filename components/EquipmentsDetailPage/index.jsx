import React, { useState, useEffect } from "react";
import styles from "./style/equipment.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import ModalEquipment from "./ModalEquipment";
import EmblaCarousel from "./EquipmentThumbnailSlider/EmblaCarousel";
import { Flex, Spinner } from "@chakra-ui/react";
import { getEquipmentsInfoDetail } from "@/services/equipmentsDetail";
import { useTranslation } from "next-i18next";
import Head from "next/head";

function EquipmentsDetailSect() {
  const router = useRouter();
  const { query } = router;
  // console.log(query.id, "query");
  const [equipmentDetail, setEquipmentDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, ready } = useTranslation();
  const [modalImageSrc, setModalImageSrc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = localStorage.getItem("lang") || "az";
        if (!query.id) {
          setError("Invalid equipment ID.");
          setLoading(false);
          return;
        }
        const response = await getEquipmentsInfoDetail(query?.id, lang);

        if (response && response.data) {
          setEquipmentDetail(response?.data);
          setError(null);
        } else {
          console.error("Invalid response format:", response);
          setError("Invalid response from server. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching equipment details:", error);
        setError("Failed to fetch equipment details. Please try again later.");
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

  if (!equipmentDetail) {
    return <p>No data found for this equipment.</p>;
  }

  const {
    title,
    name,
    desc,
    code,
    image,
    images,
    meta_title,
    meta_description,
    meta_keywords,
  } = equipmentDetail;
  const imageUrls = images?.map((img) => img.image) || [];

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };

  const OPTIONS = {};
  const IMAGES = [image, ...imageUrls];

  return (
    <div className={styles.equipmentDetailSection}>
      <Head>
        <title>{meta_title || title}</title>
        <meta name="description" content={meta_description || desc} />
        <meta name="keywords" content={meta_keywords || ""} />
      </Head>

      <EmblaCarousel slides={IMAGES} options={OPTIONS} />

      <div className={styles.equipmentDetailDescSection}>
        <h4>{title}</h4>
        <h5>{code}</h5>
        <div
          className={styles.descriptionEquipment}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        {/* <button
          onClick={() => router.push(ROUTER.EQUIPMENTS)}
          style={{
            marginTop: "50px",
            height: "52px",
            width: "120px",
            color: "white",
            backgroundColor: "var(--mainBlue)",
            borderRadius: "10px",
            fontFamily: "var(--fontJakarta)",
          }}
        >
          {t("geri")}
        </button> */}
      </div>
      <ModalEquipment
        isOpen={isModalOpen}
        onClose={closeModal}
        images={IMAGES}
      />
    </div>
  );
}

export default EquipmentsDetailSect;
