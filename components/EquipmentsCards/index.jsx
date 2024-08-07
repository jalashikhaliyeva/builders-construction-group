import React, { useEffect, useState } from "react";
import styles from "./style/equipmentsCards.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { useTranslation } from "next-i18next";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function EquipmentsCards({ equipmentsInfo }) {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const equipmentsPerPage = 3;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  const getCurrentLanguageSlug = (equipment) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return equipment[currentLanguage];
  };

  const goToEquipmentsDetail = (equipment) => {
    const equipmentId = getCurrentLanguageSlug(equipment.slug);
    router.push(`${ROUTER.EQUIPMENTS}/${equipmentId}`);
  };

  const truncateText = (text, length) => {
    if (!text) return "";
    if (text.length <= length) return text;
    const truncatedText = text.slice(0, length);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return lastSpaceIndex === -1
      ? text.slice(0, length) + "..."
      : truncatedText.slice(0, lastSpaceIndex) + "...";
  };

  const reversedEquipments = [...(equipmentsInfo.equipments || [])].reverse();

  if (!ready || !isClient) return null;

  const indexOfLastEquipment = currentPage * equipmentsPerPage;
  const indexOfFirstEquipment = indexOfLastEquipment - equipmentsPerPage;
  const currentEquipments = reversedEquipments.slice(
    indexOfFirstEquipment,
    indexOfLastEquipment
  );
  const totalPages = Math.ceil(reversedEquipments.length / equipmentsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className={styles.projectCardSection}>
      {currentEquipments.map((equipment, index) => (
        <div
          key={index}
          style={{ cursor: "pointer" }}
          className={styles.projectsCards}
          onClick={() => goToEquipmentsDetail(equipment)}
        >
          <div className={styles.projectCardImg}>
            <Image
              style={{
                height: "373px",
                boxSizing: "border-box",
                objectFit: "contain",
              }}
              src={equipment.image}
              width={240}
              height={223}
              alt={equipment.title}
            />
          </div>
          <div className={styles.projectCard}>
            <h5>{equipment.name}</h5>
            <h6>{equipment.code}</h6>
            <p
              dangerouslySetInnerHTML={{
                __html: truncateText(equipment.desc, 100),
              }}
            />
            <button>{t("ətraflı")}</button>
          </div>
        </div>
      ))}

      {reversedEquipments.length > equipmentsPerPage && (
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

export default EquipmentsCards;
