import React, { useState } from "react";
import styles from "./style/equipment.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";
import ModalEquipment from "./ModalEquipment";
import EmblaCarousel from "./EquipmentThumbnailSlider/EmblaCarousel";

function EquipmentsDetailSect() {
  const images = [
    "/imgEquipments/equipments1.jpg",
    "/imgEquipments/equipments4.jpg",
    "/imgEquipments/equipments2.jpg",
    "/imgEquipments/equipments5.jpg",
  ];

  const { push } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    "/imgEquipments/equipments1.jpg",
    "/imgEquipments/equipments4.jpg",
    "/imgEquipments/equipments2.jpg",
    "/imgEquipments/equipments5.jpg",
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
          industry. Lorem Ipsum has been the industr`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,Lorem Ipsum has been the industry`s standard.
        </p>
        <button
          onClick={() => push(ROUTER.EQUIPMENTS)}
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
      <ModalEquipment
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
      />
    </div>
  );
}

export default EquipmentsDetailSect;
