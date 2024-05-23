import React, { useState } from "react";
import styles from "./style/videosBoxes.module.css";
import { FaPlay } from "react-icons/fa";
import VideoModal from "./VideoModal";

function VideosPageSect() {
  const [modalOpen, setModalOpen] = useState(false);
  let modalImg = '/images/aboutSectImg.jpg'
  return (
    <div className={styles.videoBoxCont}>
      <div className={styles.videoBox}>
        <VideoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalImg={modalImg} />
        <h6>31.04.2024</h6>

        <div style={{ display: "flex" }}>
          <div>
            <h5>Video material</h5>
            <p>BCG group</p>
          </div>
          <div>
            <div
              onClick={() => setModalOpen(true)}
              style={{
                cursor: "pointer",
                backgroundColor: "#FF4B4B",
                marginLeft: "190px",
                width: "55px",
                height: "44px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <FaPlay
                style={{
                  width: "27px",
                  height: "25px",
                  fill: "white",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoBox}>
        <VideoModal modalOpen={modalOpen} setModalOpen={setModalOpen}  modalImg={modalImg}  />
        <h6>31.04.2024</h6>

        <div style={{ display: "flex" }}>
          <div>
            <h5>Video material</h5>
            <p>BCG group</p>
          </div>
          <div>
            <div
              onClick={() => setModalOpen(true)}
              style={{
                cursor: "pointer",
                backgroundColor: "#FF4B4B",
                marginLeft: "190px",
                width: "55px",
                height: "44px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <FaPlay
                style={{
                  width: "27px",
                  height: "25px",
                  fill: "white",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoBox}>
        <VideoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalImg={modalImg}  />
        <h6>31.04.2024</h6>

        <div style={{ display: "flex" }}>
          <div>
            <h5>Video material</h5>
            <p>BCG group</p>
          </div>
          <div>
            <div
              onClick={() => setModalOpen(true)}
              style={{
                cursor: "pointer",
                backgroundColor: "#FF4B4B",
                marginLeft: "190px",
                width: "55px",
                height: "44px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <FaPlay
                style={{
                  width: "27px",
                  height: "25px",
                  fill: "white",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.videoBox}>
        <VideoModal modalOpen={modalOpen} setModalOpen={setModalOpen} modalImg={modalImg}  />
        <h6>31.04.2024</h6>

        <div style={{ display: "flex" }}>
          <div>
            <h5>Video material</h5>
            <p>BCG group</p>
          </div>
          <div>
            <div
              onClick={() => setModalOpen(true)}
              style={{
                cursor: "pointer",
                backgroundColor: "#FF4B4B",
                marginLeft: "190px",
                width: "55px",
                height: "44px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <FaPlay
                style={{
                  width: "27px",
                  height: "25px",
                  fill: "white",
                  marginLeft: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosPageSect;
