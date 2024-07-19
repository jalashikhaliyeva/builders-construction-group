import { useState } from "react";
import VideoModal from "../VideosPageSection/VideoModal";
import styles from "./videocontainer.module.css";

const VideoComponent = ({ iframeLink, backgroundImage }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);

  return (
    <>
      <div 
        className={styles.container}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.backgroundVideo}></div>
        <VideoModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          modalLink={iframeLink}
        />
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
        </div>
      </div>
    </>
  );
};

export default VideoComponent;
