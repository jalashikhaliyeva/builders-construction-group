import React, { useState } from "react";
import styles from "./productsdetail.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";

import EmblaCarousel from "./EmblaCarousel";

function ProductsDetailSect() {
  // const images = [
  //   "/imgEquipments/equipments1.jpg",
  //   "/imgEquipments/equipments4.jpg",
  //   "/imgEquipments/equipments2.jpg",
  //   "/imgEquipments/equipments5.jpg",
  // ];

  const { push } = useRouter();
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };
  const OPTIONS = {};
  const IMAGES = [
    "/images/Productsimg/product1.png",
    "/images/Productsimg/product2.png",
    "/images/Productsimg/product3.png",
    "/images/Productsimg/product4.png",
    "/images/Productsimg/product5.png",
  ];

  return (
    <div className={styles.equipmentDetailSection}>
      {/* <div className={styles.equipmentDetailImgSection}>
        <Image
          width={400}
          height={630}
          src="/imgEquipments/equipments1.jpg"
          onClick={() => openModal("/imgEquipments/equipments1.jpg")}
          style={{ cursor: "pointer", objectFit: "cover", marginLeft: "100px" }}
        />
        <div className={styles.equipmentsSmallImg}>
          {images.slice(1).map((src, index) => (
            <Image
              key={index}
              width={180}
              height={160}
              src={src}
              onClick={() => openModal(src)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div> */}

      <EmblaCarousel slides={IMAGES} options={OPTIONS} />
      <div className={styles.equipmentDetailDescSection}>
        <h4>Zoomlion ZT</h4>
        <h5>ZTC250A562</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industrys standard.
        </p>
        <button
          onClick={() => push(ROUTER.PRODUCTS)}
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
          Geri
        </button>
      </div>
    </div>
  );
}

export default ProductsDetailSect;
