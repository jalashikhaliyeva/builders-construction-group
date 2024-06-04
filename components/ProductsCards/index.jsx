import React, { useState, useEffect } from "react";
import styles from "./projectsCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";

function ProductsCards({ productsInfo }) {
  const router = useRouter();

  const goToProductsDetail = (productId) => {
    router.push(`${ROUTER.PRODUCTS}/${productId}`);
  };

  return (
    <div className={styles.projectCardSection}>
      {productsInfo?.products?.map((product, index) => (
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
            <button onClick={() => goToProductsDetail(product?.slug)}>
              Daha çox
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsCards;
