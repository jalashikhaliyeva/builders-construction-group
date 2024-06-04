import React from "react";
import styles from "./style/contactUs.module.css";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function ContactUsSectionFirst({ contactInfo }) {
  // Destructure the relevant fields from the contactInfo prop
  const { address, email, image, phone } = contactInfo;

  return (
    <>
      <div className={styles.aboutSectContainer}>
        <h3>Hər daim xidmətinizdəyik</h3>
        <div className={styles.aboutSectBox} data-aos="fade-right">
          <div className={styles.footerContactWorld}>
            <IoLocationSharp style={{ color: "white", fontSize: "32px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>Adress</h5>
              <p>{address}</p>
            </div>
          </div>
          <div className={styles.footerContactWorld}>
            <FaPhone style={{ color: "white", fontSize: "24px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>Phone</h5>
              <p>{phone}</p>
            </div>
          </div>
          <div className={styles.footerContactWorld}>
            <IoIosMail style={{ color: "white", fontSize: "32px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>Email</h5>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutSectImage}>
          <Image alt="contactUs" src={image} width={980} height={900} />
        </div>
      </div>
    </>
  );
}

export default ContactUsSectionFirst;
