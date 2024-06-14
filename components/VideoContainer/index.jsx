import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import VideoModal from "../VideosPageSection/VideoModal";
import { useState } from "react";
import styles from "./videoContainer.module.css";

const VideoContainer = ({ homeInfo , lang}) => {
  // console.log(lang,"lang video cont");
  const data = homeInfo?.slider;
  const [modalOpen, setModalOpen] = useState(false);
  const { push } = useRouter();

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
  return (
    <div
      onClick={handleOpenModal}
      className={styles.container}
      style={containerStyle}
    >
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
          Biz kimik?
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
