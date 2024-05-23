import { useRouter } from "next/router";
import { ROUTER } from "@/constant/router";
import VideoModal from "../VideosPageSection/VideoModal";
import { useState } from "react";
import styles from './videoContainer.module.css';

const VideoContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { push } = useRouter();

  const handleOpenModal = () => setModalOpen(true);
  const handleNavigateToAbout = () => push(ROUTER.ABOUT);

  return (
    <div
      onClick={handleOpenModal}
      className={styles.container}
    >
      <VideoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className={styles.textContainer}>
        <p className={styles.mainText}>
          İşimizdə dəyişimlərə yol açan yeni prosedurlar və texnologiyalar
          tətbiq edirik.
        </p>

        <div className={styles.subTextContainer}>
          <p className={styles.subText}>Qısa zamanda böyük müştəri kütləsi</p>
          <p className={styles.subText}>qazandığımız üçün qürur duyuruq</p>
        </div>

        <button
          onClick={handleNavigateToAbout}
          className={styles.button}
        >
          Biz kimik?
        </button>
      </div>

      <div
        onClick={handleOpenModal}
        className={styles.playButtonContainer}
      >
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
