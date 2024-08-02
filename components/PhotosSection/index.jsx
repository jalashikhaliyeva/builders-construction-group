import { useState } from "react";
import Image from "next/image";
import styles from "./style/photosSection.module.css";

function PhotosSection({ photos }) {
  // console.log(photos, "photos");
  const gallery = [...(photos.gallery || [])].reverse(); // Reverse the order of photos
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevious = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.containerPh}>
      <div className={styles.photosContainer}>
        {gallery.map((photo, index) => (
          <div
          style={{cursor:"pointer"}}
            key={index}
            className={styles.photo}
            onClick={() => handlePhotoClick(index)}
          >
            <Image
              src={photo.image}
              alt={`Photo ${index}`}
              width={500}
              height={500}
              layout="responsive"
              className={styles.photosGallery}
            />
          </div>
        ))}
      </div>
      {selectedPhotoIndex !== null && (
        <div className={styles.modal} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "#FF5D5D",
                width: "42px",
                height: "37px",
                fontSize: "22px",
                borderRadius: "16px",
                position: "absolute",
                top: "120px",
                right: "155px",
              }}
              className={styles.closeButton}
              onClick={handleCloseModal}
            >
              X
            </button>
            <div className={styles.slider}>
              <button
                style={{
                  position: "absolute",
                  top: "335px",
                  right: "0",
                  left:"490px",
                  width: "48px",
                  height: "65px",
                  fontSize: "30px",
                }}
                className={styles.sliderButton}
                onClick={handlePrevious}
              >
                &gt;
              </button>
              <img
                style={{
            
                  borderRadius: "26px",
                }}
                src={gallery[selectedPhotoIndex].image}
                alt={`Photo ${selectedPhotoIndex}`}
              
           
                className={styles.selectedPhotoGallery}
              />
              <button
                style={{
                  position: "absolute",
                  top: "330px",
                  right: "1070px",
                  width: "48px",
                  height: "65px",
                  fontSize: "30px",
                }}
                className={styles.sliderButton}
                onClick={handleNext}
              >
                &lt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotosSection;

