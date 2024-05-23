import React from "react";
import styles from "./style/contactUs.module.css";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function ContactUsSectionFirst() {
  return (
    <>
      <div className={styles.aboutSectContainer}>
        <h3>Hər daim xidmətinizdəyik</h3>
        <div className={styles.aboutSectBox} data-aos="fade-right">
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
        <div className={styles.aboutSectImage}>
          <Image  alt="contactUs" src="/images/contactUs.jpg" width={980} height={900} />
        </div>
      </div>
    </>
  );
}

export default ContactUsSectionFirst;
