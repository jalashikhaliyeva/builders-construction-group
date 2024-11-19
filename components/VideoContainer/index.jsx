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
    setIsClient(true);
  }, []);

  const handleOpenModal = () => setModalOpen(true);
  const handleNavigateToAbout = () => push(ROUTER.ABOUT);

  if (!data || data.length === 0) {
    return null;
  }

  const { title, desc, video, image } = data[0];

  if (!ready || !isClient) return null;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundVideo}>
        <video style={{opacity:"0.8", borderRadius:"16px", objectFit:"cover", height:"100%"}} src={video} autoPlay loop muted playsInline />
        </div>
        {/* <VideoModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalLink={video}
        /> */}

        <div className={styles.textContainer}>
          <p className={styles.mainText}>{title}</p>

          <div className={styles.subTextContainer}>
            <p className={styles.subText}>{desc}</p>
          </div>

          <button onClick={handleNavigateToAbout} className={styles.button}>
            {t("biz kimik")}
          </button>
        </div>
        {/* 
        <div onClick={handleOpenModal} className={styles.playButtonContainer}>
          <svg
          className={styles.svgPlayBtn}
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
        </div> */}
      </div>
      <div className={styles.container}>
      <h1 className={styles.partnersTitle}> {t("Partners")}</h1>
      </div>
    </>
  );
};

export default VideoContainer;
