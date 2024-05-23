import React from "react";
import styles from "./projectsCard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";

function ProductsCards() {
  const router = useRouter();
  const goToProductsDetail = () => {
    const productId = "22"; //bu backendden deyisen ID olacag
    router.push(`${ROUTER.PRODUCTS}/${productId}`);
  };
  return (
    <div className={styles.projectCardSection}>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "cover",
                       
              borderRadius:"15px"
            }}
            src="/images/Productsimg/product1.png"
            width={240}
            height={223}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            beataepeditatatem.
          </p>
          <button onClick={goToProductsDetail}>Daha çox</button>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "cover",
                       
              borderRadius:"15px"
            }}
            src="/images/Productsimg/product2.png"
            width={240}
            height={373}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>Nə iş gördüyü haqqında qısa məlumat üçün yer</p>
          <button onClick={goToProductsDetail}>Daha çox</button>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "cover",
                       
              borderRadius:"15px"
            }}
            src="/images/Productsimg/product3.png"
            width={240}
            height={373}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>Nə iş gördüyü haqqında qısa məlumat üçün yer</p>
          <button onClick={goToProductsDetail}>Daha çox</button>
        </div>
      </div>
      <div style={{ cursor: "pointer" }} className={styles.projectsCards}>
        <div className={styles.projectCardImg}>
          <Image
            style={{
              height: "373px",
              boxSizing: "border-box",
              objectFit: "cover",
         
              borderRadius:"15px"
            }}
            src="/images/Productsimg/product4.png"
            width={240}
            height={373}
          />
        </div>
        <div className={styles.projectCard}>
          <h5>Zoomlion ZT</h5>
          <h6>ZTC250A562</h6>
          <p>Nə iş gördüyü haqqında qısa məlumat üçün yer</p>
          <button onClick={goToProductsDetail}>Daha çox</button>
        </div>
      </div>
    </div>
  );
}

export default ProductsCards;
