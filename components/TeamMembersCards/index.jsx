import React from "react";
import styles from "./style/teamMembers.module.css";
import { ROUTER } from "@/constant/router";
import { useRouter } from "next/router";

function TeamMembersCards() {
  const router = useRouter();
  const goToTeamDetail = () => {
    const teamId = "22"; //bu backendden deyisen ID olacag
    router.push(`${ROUTER.TEAM}/${teamId}`);
  };
  return (
    <section className={styles.teamSection}>
      <h2>İdarə Heyəti</h2>
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
            Michael Johnson
            <p>SEO Specialist</p>
          </div>
        </div>
        <div onClick={goToTeamDetail} className={styles.card}>
          <img
            src="/images/userImg/user2.png"
            alt="user2"
            width="350px"
            height="350px"
            style={{ paddingTop: "50px" }}
          />
          <div className={styles.cardDesc}>
            {" "}
            Emily Davis
            <p>Sales Manager</p>
          </div>
        </div>
        <div onClick={goToTeamDetail} className={styles.card}>
          <img
            src="/images/userImg/user3.png"
            alt="user3"
            width="350px"
            height="350px"
            style={{ paddingTop: "40px" }}
          />
          <div className={styles.cardDesc}>
            Daniel Brown
            <p>Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembersCards;
