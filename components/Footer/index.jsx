import React from "react";
import styles from "./style/footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer1Line}>
        <h5>Buildings construction group</h5>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore
        </p>
        <div className={styles.socialIcons}>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://facebook.com"
          >
            <FaFacebook />
          </a>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://linkedin.com"
          >
            <FaLinkedin />
          </a>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://twitter.com"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://instagram.com"
          >
            <FaSquareInstagram />
          </a>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://youtube.com"
          >
            <FaYoutube />
          </a>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://tiktok.com"
          >
            <FaTiktok />
          </a>
          <a
            style={{ color: "white", fontSize: "32px" }}
            href="https://pinterest.com"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className={styles.footerSecondLine}>
        <ul className={styles.footerLinks}>
          <li>Ana səhifə</li>
          <li>Haqqımızda</li>
          <li>Məhsullar</li>
          <li>Xidmətlər</li>
          <li>Layihələr</li>
          <li>Əlaqə</li>
        </ul>

        <div className={styles.footerContact}>
          <div className={styles.footerContactWorld}>
            <TbWorld style={{ color: "white", fontSize: "32px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>Website</h5>
              <p>www.bcgroupaz.com</p>
            </div>
          </div>
          <div className={styles.footerContactWorld}>
            <FaPhone style={{ color: "white", fontSize: "24px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>Phone</h5>
              <p>+012 000 00 00</p>
            </div>
          </div>
          <div className={styles.footerContactWorld}>
            <IoIosMail style={{ color: "white", fontSize: "32px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>Email</h5>
              <p>mail@bcgroupaz.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.footerCopyRight}>
        © 2023 bcgroupaz. All Rights Reserved. With love by Markup
      </p>
    </footer>
  );
}

export default Footer;
