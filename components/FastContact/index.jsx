import React from "react";
import styles from "./style/fastContact.module.css";

function FastContactModal({ onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.formContainer}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>
        <h2>Sürətli əlaqə</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Sizin adınız"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email və ya nömrə*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sizin e-mail və ya nömrəniz"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Mövzu*</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Müraciət mövzusu"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Mesajınızı daxil edin"
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FastContactModal;
