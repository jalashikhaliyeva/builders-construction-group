import React, { useState, useEffect } from "react";
import styles from "./projectsCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function ProductsCards({ productsInfo }) {
  const router = useRouter();

  const getCurrentLanguageSlug = (product) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return product[currentLanguage];
  };

  const goToProductsDetail = (product) => {
    const productId = getCurrentLanguageSlug(product.slug);
    console.log(productId, "productId"); 
    router.push(`${ROUTER.PRODUCTS}/${productId}`);
  };

  // Reverse the order of products
  const reversedProducts = [...(productsInfo?.products || [])].reverse();

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
            <div dangerouslySetInnerHTML={{ __html: product?.desc }}></div>
            <button onClick={() => goToProductsDetail(product)}>
              Daha çox
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsCards;
