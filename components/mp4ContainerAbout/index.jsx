import React from "react";
import styles from "./Mp4About.module.css";

function Mp4About() {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/motion.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Mp4About;
