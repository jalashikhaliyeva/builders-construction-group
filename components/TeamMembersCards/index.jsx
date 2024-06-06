import React from "react";
import styles from "./style/teamMembers.module.css";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";
import { FaLinkedin } from "react-icons/fa";

function TeamMembersCards() {
  const router = useRouter();
  const goToTeamDetail = () => {
    const teamId = "22"; // This will change dynamically
    router.push(`${ROUTER.TEAM}/${teamId}`);
  };
  return (
    <section className={styles.teamSection}>
      <h2>İdarə Heyəti</h2>
      <div className={styles.cards}>
      <div className={styles.cardSect}>
        <div onClick={goToTeamDetail} className={styles.card}>
          <img
            src="/images/userImg/user1.png"
            alt="user1"
            width="350px"
            height="350px"
            style={{ paddingTop: "50px" }}
          />
          <div className={styles.cardDesc}>
            <div className={styles.textContainer}>
              <p>Michael Johnson</p>
              <p>SEO Specialist</p>
            </div>
     
          </div>
          <div className={styles.rightIcon}>
          <FaLinkedin  className={styles.linkedInIcon} style={{ height:"50px" , width:"20px" , }} />

          </div>
          {/* <div className={styles.iconContainer}>
              <i className="fab fa-linkedin"></i>
            </div> */}
        </div>
        {/* Repeat for other team members */}
      </div>
      <div className={styles.cardSect}>
        <div onClick={goToTeamDetail} className={styles.card}>
          <img
            src="/images/userImg/user1.png"
            alt="user1"
            width="350px"
            height="350px"
            style={{ paddingTop: "50px" }}
          />
          <div className={styles.cardDesc}>
            <div className={styles.textContainer}>
              <p>Michael Johnson</p>
              <p>SEO Specialist</p>
            </div>
     
          </div>
          <div className={styles.rightIcon}>
          <FaLinkedin  className={styles.linkedInIcon} style={{ height:"50px" , width:"20px" , }} />

          </div>
          {/* <div className={styles.iconContainer}>
              <i className="fab fa-linkedin"></i>
            </div> */}
        </div>
        {/* Repeat for other team members */}
      </div>
      <div className={styles.cardSect}>
        <div onClick={goToTeamDetail} className={styles.card}>
          <img
            src="/images/userImg/user1.png"
            alt="user1"
            width="350px"
            height="350px"
            style={{ paddingTop: "50px" }}
          />
          <div className={styles.cardDesc}>
            <div className={styles.textContainer}>
              <p>Michael Johnson</p>
              <p>SEO Specialist</p>
            </div>
     
          </div>
          <div className={styles.rightIcon}>
          <FaLinkedin  className={styles.linkedInIcon} style={{ height:"50px" , width:"20px" , }} />

          </div>
          {/* <div className={styles.iconContainer}>
              <i className="fab fa-linkedin"></i>
            </div> */}
        </div>
        {/* Repeat for other team members */}
      </div>
      <div className={styles.cardSect}>
        <div onClick={goToTeamDetail} className={styles.card}>
          <img
            src="/images/userImg/user1.png"
            alt="user1"
            width="350px"
            height="350px"
            style={{ paddingTop: "50px" }}
          />
          <div className={styles.cardDesc}>
            <div className={styles.textContainer}>
              <p>Michael Johnson</p>
              <p>SEO Specialist</p>
            </div>
     
          </div>
          <div className={styles.rightIcon}>
          <FaLinkedin  className={styles.linkedInIcon} style={{ height:"50px" , width:"20px" , }} />

          </div>
          {/* <div className={styles.iconContainer}>
              <i className="fab fa-linkedin"></i>
            </div> */}
        </div>
        {/* Repeat for other team members */}
      </div>
      </div>
    </section>
  );
}

export default TeamMembersCards;
