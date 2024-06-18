import React, { useEffect, useState } from "react";
import styles from "./style/contactUs.module.css";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "next-i18next";

function ContactUsSectionFirst({ contactInfo }) {
  // console.log(contactInfo,"contactInfo");
  // const { address, email, image, phone } = contactInfo;
  // console.log(contactInfo?.contact?.address,"address");
  const address = contactInfo?.contact?.address;
  const email = contactInfo?.contact?.email;
  const image = contactInfo?.contact?.image;
  const phone = contactInfo?.contact?.phone;
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  return (
    <>
      <div className={styles.aboutSectContainer}>
        <h3>{t("hər daim xidmətinizdəyik")}</h3>

        <div className={styles.aboutSectBox} data-aos="fade-right">
          <div className={styles.footerContactWorld}>
            <IoLocationSharp style={{ color: "white", fontSize: "32px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>{t("Address")}</h5>
              <p>{address}</p>
            </div>
          </div>
          <div className={styles.footerContactWorld}>
            <FaPhone style={{ color: "white", fontSize: "24px" }} />
            <div className={styles.footerSecondLineDesc}>
              <h5>{t("phone")}</h5>
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
