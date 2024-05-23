import { useState } from "react";
import Image from "next/image";
import styles from "./style/photosSection.module.css";

function PhotosSection() {
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const ImagesObj = {
    1: { photoUrl: "photosSect1.jpg", id: 1, title: "photosSect1.jpg" },
    2: { photoUrl: "photosSect2.jpg", id: 2, title: "photosSect2.jpg" },
    3: { photoUrl: "photosSect3.jpg", id: 3, title: "photosSect3.jpg" },
    4: { photoUrl: "photosSect4.jpg", id: 4, title: "photosSect4.jpg" },
    5: { photoUrl: "photosSect5.jpg", id: 5, title: "photosSect5.jpg" },
    6: { photoUrl: "photosSect6.jpg", id: 6, title: "photosSect6.jpg" },
    7: { photoUrl: "photosSect7.jpg", id: 7, title: "photosSect7.jpg" },
    8: { photoUrl: "photosSect8.jpg", id: 8, title: "photosSect8.jpg" },
    9: { photoUrl: "photosSect9.jpg", id: 9, title: "photosSect9.jpg" },
  };

  const imageIds = Object.keys(ImagesObj);

  const handlePhotoClick = (imageId) => {
    setSelectedPhotoId(imageId);
  };

  const handleCloseModal = () => {
    setSelectedPhotoId(null);
  };

  const handlePrevious = () => {
    const currentIndex = imageIds.indexOf(selectedPhotoId.toString());
    const previousIndex =
      (currentIndex - 1 + imageIds.length) % imageIds.length;
    setSelectedPhotoId(imageIds[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = imageIds.indexOf(selectedPhotoId.toString());
    const nextIndex = (currentIndex + 1) % imageIds.length;
    setSelectedPhotoId(imageIds[nextIndex]);
  };

  return (
    <div className={styles.containerPh}>
      <div className={styles.photosContainer}>
        {imageIds.map((imageId) => (
          <div
            key={imageId}
            className={styles.photo}
            onClick={() => handlePhotoClick(imageId)}
          >
            <Image
              src={`/photosPageImg/${ImagesObj[imageId].photoUrl}`}
              alt={ImagesObj[imageId].title}
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      {selectedPhotoId && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
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
                  top: "495px",
                  right: "60px",
                  width: "68px",
                  height: "65px",
                  fontSize: "30px",
                }}
                className={styles.sliderButton}
                onClick={handlePrevious}
              >
                &gt;
              </button>
              <Image
                style={{
                  borderRadius: "26px",
                }}
                src={`/photosPageImg/${ImagesObj[selectedPhotoId].photoUrl}`}
                alt={ImagesObj[selectedPhotoId].title}
                width={800}
                height={800}
                layout="responsive"
              />
              <button
                style={{
                  position: "absolute",
                  top: "500px",
                  right: "870px",
                  width: "68px",
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
