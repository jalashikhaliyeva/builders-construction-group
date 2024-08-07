import React, { useState, useEffect } from "react";
import styles from "./style/videosBoxes.module.css";
import { FaPlay } from "react-icons/fa";
import VideoModal from "./VideoModal";
import { getVideos } from "@/services/videoInfo";
import Image from "next/image";

function VideosPageSect() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await getVideos();
        const data = response.data;
        // Reverse the order of videos
        const reversedVideos = [...data.video].reverse();
        setVideos(reversedVideos);
        // console.log(reversedVideos, "data video");
      } catch (error) {
        console.error("Failed to fetch videos", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className={styles.videoBoxCont}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoBox}>
          <VideoBox video={video} />
        </div>
      ))}
    </div>
  );
}

function VideoBox({ video }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(video.image);
  const [modalLink, setModalLink] = useState(video.link);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <h6>{video.created_at}</h6>
      <div style={{ display: "flex" }}>
        <div>
          <h5>Video material</h5>
          <p>BCG group</p>
        </div>
        <div>
          <div onClick={openModal} className={styles.customButton}>
            <FaPlay
              style={{
                width: "22px",
                height: "20px",
                fill: "white",
                marginLeft: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <Image
      style={{objectFit:"cover"}}
        width={700}
        height={300}
        src={video.image}
        alt="Video Thumbnail"
        className={`${styles.imgVideoCont} rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out`}
      />
      <VideoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalImg={modalImg}
        modalLink={modalLink}
      />
    </>
  );
}

export default VideosPageSect;
