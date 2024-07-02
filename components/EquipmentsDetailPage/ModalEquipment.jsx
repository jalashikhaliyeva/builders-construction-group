import React, { useState } from "react";
import styles from "./style/equipment.module.css";
import Image from "next/image";

const ModalEquipment = ({ isOpen, onClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.slider}>
          <button
            className={`${styles.prevButton} ${styles.button}`}
            onClick={prevSlide}
          >
            &lt;
          </button>
          <Image width={300} height={300} src={images[currentImageIndex]} alt="Equipment" />
          <button
            className={`${styles.nextButton} ${styles.button}`}
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEquipment;
