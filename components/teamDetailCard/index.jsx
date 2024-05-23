import React from "react";
import styles from "./teamDetail.module.css";
import { FaLinkedin } from "react-icons/fa";
function TeamDetail() {
  return (
    <div className={styles.teamDetailSect}>
      <div className={styles.card}>
        <img
          src="/images/userImg/user1.png"
          alt="user1"
          width="350px"
          height="350px"
          style={{ paddingTop: "50px" }}
        />
      </div>
      <div className={styles.carDescMember}>
        <h3>Michael Johnson</h3>
        <h6>SEO Specialist</h6>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.nihil placeat
          blanditiis error quaerat quibusdam facilis cupiditate.
        </p>
        <FaLinkedin  className={styles.linkedInIcon} style={{ height:"50px" , width:"20px"}} />
      </div>
    </div>
  );
}

export default TeamDetail;
