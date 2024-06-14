import React, { useState } from "react";
import styles from "./style/connect.module.css";
import { postContactForm } from "@/services/contactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    detail: "",
    topic: "",
    note: "",
  });

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
      toast.error("Please fill in all the fields");
      return;
    }
    console.log("Form data being submitted:", formData); // Log
    try {
      const response = await postContactForm(formData);
      console.log("Response from API:", response);
      toast.success("Form submitted successfully!");
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

  return (
    <section className={styles.connectSection}>
      <div className={styles.connectImg}>
        {/* <Image src="/images/connectWithUsImg.jpg" width={620} height={480}/> */}
        <img src="/images/connectWithUsImg.jpg" alt="connectWithUsImg" />
      </div>

      <div className={styles.formContainer} data-aos="fade-left">
        <h2>Sürətli əlaqə</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Sizin adınız"
              value={formData.name}
              onChange={handleChange}
              // required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email və ya nömrə*</label>
            <input
              type="text"
              id="email"
              name="detail"
              placeholder="Sizin e-mail və ya nömrəniz"
              value={formData.detail}
              onChange={handleChange}
              // required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Mövzu*</label>
            <input
              type="text"
              id="description"
              name="topic"
              placeholder="Müraciət mövzusu"
              value={formData.topic}
              onChange={handleChange}
              // required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="note"
              rows="4"
              placeholder="Mesajınızı daxil edin"
              value={formData.note}
              onChange={handleChange}
              // required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Send</button>
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
