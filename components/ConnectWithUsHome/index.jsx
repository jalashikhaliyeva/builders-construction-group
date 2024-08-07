import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./style/connect.module.css";
import { postContactForm } from "@/services/contactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

function ConnectWithUs({ contactImageURL }) {
  const { t, ready } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    detail: "",
    topic: "",
    note: "",
  });

  useEffect(() => {
    setIsClient(true); // Set flag to true after component mounts
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, detail, topic, note } = formData;
    if (!name || !detail || !topic || !note) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error(t("Please fill in all the fields"));
      return;
    }
    // console.log("Form data being submitted:", formData);
    try {
      const response = await postContactForm(formData);
      console.log("Response from API:", response);
      toast.success(t("Form submitted successfully!"));
      setFormData({
        name: "",
        detail: "",
        topic: "",
        note: "",
      });
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        toast.error(`Server Error: ${error.response.data.message}`);
      } else if (error.request) {
        toast.error("Network Error: Please check your internet connection");
      } else {
        toast.error("An unknown error occurred. Please try again later.");
      }
    }
  };

  if (!ready || !isClient) return null; // Ensure translations are loaded and component is client-side

  return (
    <section className={styles.connectSection}>
      <div className={styles.connectImg}>
        {/* <Image src="/images/connectWithUsImg.jpg" width={620} height={480}/> */}
        <Image
          height={715}
          width={500}
          style={{ height: "715px", borderRadius: "12px" }}
          src={contactImageURL}
          alt="connectWithUsImg"
        />
      </div>

      <div className={styles.formContainer} data-aos="flip-up">
        <h2> {t("sürətli əlaqə")}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">{t("ad")}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("ad")}
              value={formData.name}
              onChange={handleChange}
              // required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">{t("email və ya Nömrə")}</label>
            <input
              type="text"
              id="email"
              name="detail"
              // placeholder="Sizin e-mail və ya nömrəniz"
              placeholder={t("sizin e-mail və ya nömrəniz")}
              value={formData.detail}
              onChange={handleChange}
              // required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">{t("mövzu")}</label>
            <input
              type="text"
              id="description"
              name="topic"
              placeholder={t("müraciət mövzusu")}
              // placeholder="Müraciət mövzusu"
              value={formData.topic}
              onChange={handleChange}
              // required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">{t("mesaj")}</label>
            <textarea
              id="message"
              name="note"
              rows="4"
              // placeholder="Mesajınızı daxil edin"
              placeholder={t("mesajınızı Daxil Edin")}
              value={formData.note}
              onChange={handleChange}
              // required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">{t("send")}</button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default ConnectWithUs;
