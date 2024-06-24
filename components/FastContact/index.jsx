import React, { useState, useEffect } from "react";
import styles from "./style/fastContact.module.css";
import { postContactForm } from "@/services/contactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FastContactModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    detail: "",
    topic: "",
    note: "",
  });

  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

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
    // console.log("Form data being submitted:", formData);
    try {
      const response = await postContactForm(formData);
      // console.log("Response from API:", response);
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        detail: "",
        topic: "",
        note: "",
      });
      setIsSuccessModalVisible(true); // Show success modal
      setTimeout(() => {
        setIsSuccessModalVisible(false);
        onClose();
      }, 2000); // Close success modal after 3 seconds
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

  const handleClickOutside = (event) => {
    if (event.target.className.includes(styles.modalOverlay)) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={handleClickOutside}>
      <div className={styles.formContainer}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
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
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="detail">Email və ya nömrə*</label>
            <input
              type="text"
              id="detail"
              name="detail"
              placeholder="Sizin e-mail və ya nömrəniz"
              value={formData.detail}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="topic">Mövzu*</label>
            <input
              type="text"
              id="topic"
              name="topic"
              placeholder="Müraciət mövzusu"
              value={formData.topic}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="note">Message*</label>
            <textarea
              id="note"
              name="note"
              rows="4"
              placeholder="Mesajınızı daxil edin"
              value={formData.note}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Send</button>
          </div>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
}

export default FastContactModal;
