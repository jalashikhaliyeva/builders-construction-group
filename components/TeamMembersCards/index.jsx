import React, { useEffect, useState } from "react";
import styles from "./style/teamMembers.module.css";
import { ROUTER } from "@/shared/constant/router";
import { useRouter } from "next/router";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

function TeamMembersCards({ teamInfo }) {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation();
  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  const getCurrentLanguageSlug = (member) => {
    const currentLanguage = localStorage.getItem("lang") || "az";
    return member[currentLanguage];
  };

  const goToTeamDetail = (member) => {
    const memberId = getCurrentLanguageSlug(member.slug);
    // console.log(memberId, "memberId");
    router.push(`${ROUTER.TEAM}/${memberId}`);
  };

  const truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    const truncatedText = text.slice(0, length);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return text.slice(0, lastSpaceIndex) + "...";
  };

  if (!isClient) {
    return null; 
  }

  const reversedTeamMembers = [...(teamInfo?.teams || [])].reverse();

  return (
    <section className={styles.teamSection}>
      <h2> {t("idarə Heyəti")}</h2>
      <div className={styles.cards}>
        {reversedTeamMembers.map((member, index) => (
          <div key={index} className={styles.cardSect}>
            <div style={{cursor:"pointer"}} onClick={() => goToTeamDetail(member)} className={styles.card}>
              <Image
                src={member.image}
                alt={member.title}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.cardDesc}>
                <div className={styles.textContainer}>
                  <p className={styles.memberText}>{member.title}</p>
                  <p>{member.profession}</p>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: truncateText(member.desc, 200),
                    }}
                  ></p> */}
                </div>
              </div>
              <Link href={member?.linkedin}>
                <div className={styles.linkedinIconCard}>
                  <FaLinkedin
                    className={styles.linkedInIcon}
                    style={{ height: "50px", width: "20px" }}
                  />
                </div>
              </Link>
              <Link href={member?.instagram}>
                <div className={styles.instagramIconCard}>
                  <FaInstagram
                    className={styles.instagramIcon}
                    style={{ height: "50px", width: "20px" }}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembersCards;
