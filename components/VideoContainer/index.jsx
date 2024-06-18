import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import VideoModal from "../VideosPageSection/VideoModal";
import { useState, useEffect } from "react";
import styles from "./videoContainer.module.css";
import { useTranslation } from "next-i18next";

const VideoContainer = ({ homeInfo, lang }) => {
  const { t, ready } = useTranslation();
  const data = homeInfo?.slider;
  const [modalOpen, setModalOpen] = useState(false);
  const { push } = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleNavigateToAbout = () => push(ROUTER.ABOUT);

  if (!data || data.length === 0) {
    return null;
  }

  const { title, desc, link, image } = data[0];

  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  return (
    <div className={styles.container} style={containerStyle}>
      <VideoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalLink={link}
      />

      <div className={styles.textContainer}>
        <p className={styles.mainText}>{title}</p>

        <div className={styles.subTextContainer}>
          <p className={styles.subText}>{desc}</p>
        </div>

        <button onClick={handleNavigateToAbout} className={styles.button}>
          {t("biz kimik")}
        </button>
      </div>

      <div onClick={handleOpenModal} className={styles.playButtonContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#27343F"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </div>
    </div>
  );
};

export default VideoContainer;
