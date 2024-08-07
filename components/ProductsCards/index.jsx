import React, { useState, useEffect } from "react";
import styles from "./projectsCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { useTranslation } from "next-i18next";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

function ProductsCards({ productsInfo }) {
  const router = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const getCurrentLanguageSlug = (product) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return product[currentLanguage];
  };

  const goToProductsDetail = (product) => {
    const productId = getCurrentLanguageSlug(product.slug);
    router.push(`${ROUTER.PRODUCTS}/${productId}`);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    const plainText = text.replace(/<[^>]*>/g, ""); // Strip HTML tags
    return plainText.length > maxLength
      ? plainText.slice(0, maxLength) + "..."
      : plainText;
  };

  // Reverse the order of products
  const reversedProducts = [...(productsInfo?.products || [])].reverse();

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = reversedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(reversedProducts.length / productsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className={styles.projectCardSection}>
      {currentProducts.map((product, index) => (
        <div
          key={index}
          style={{ cursor: "pointer" }}
          className={styles.projectsCards}
        >
          <div className={styles.projectCardImg}>
            <Image
              style={{
                height: "373px",
                objectFit: "contain",
                borderRadius: "15px",
              }}
              src={product.image}
              width={240}
              height={373}
            />
          </div>
          <div className={styles.projectCard}>
            <div>
              <h5>{product?.title}</h5>
              <h6>{product?.code}</h6>
              <div
                dangerouslySetInnerHTML={{
                  __html: truncateText(product?.desc, 80),
                }}
              ></div>
            </div>
            <div>
              <button onClick={() => goToProductsDetail(product)}>
                {t("ətraflı")}
              </button>
            </div>
          </div>
        </div>
      ))}

      {reversedProducts.length > productsPerPage && (
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

export default ProductsCards;
