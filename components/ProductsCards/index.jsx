import React, { useState, useEffect } from "react";
import styles from "./projectsCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { useTranslation } from "next-i18next";

function ProductsCards({ productsInfo }) {
  const router = useRouter();
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const getCurrentLanguageSlug = (product) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return product[currentLanguage];
  };

  const goToProductsDetail = (product) => {
    const productId = getCurrentLanguageSlug(product.slug);
    console.log(productId, "productId");
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

  return (
    <div className={styles.projectCardSection}>
      {reversedProducts.map((product, index) => (
        <div
          key={index}
          style={{ cursor: "pointer" }}
          className={styles.projectsCards}
        >
          <div className={styles.projectCardImg}>
            <Image
              style={{
                height: "373px",
                boxSizing: "border-box",
                objectFit: "cover",
                borderRadius: "15px",
              }}
              src={product.image}
              width={240}
              height={373}
            />
          </div>
          <div className={styles.projectCard}>
            <h5>{product?.title}</h5>
            <h6>{product?.code}</h6>
            <div
              dangerouslySetInnerHTML={{
                __html: truncateText(product?.desc, 80),
              }}
            ></div>{" "}
            {/* Truncate text here */}
            <button
              style={{ marginTop: "40px" }}
              onClick={() => goToProductsDetail(product)}
            >
              {t("ətraflı")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsCards;
