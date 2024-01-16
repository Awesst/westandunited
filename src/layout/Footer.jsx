import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [emailContent, setEmailContent] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("email", emailContent);
    localStorage.setItem("message", messageContent);

    // Clear Content
    setEmailContent("");
    setMessageContent("");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h2 className={styles.contactText}>Contact Us</h2>
        <form>
          <fieldset className={styles.formGroup}>
            <input
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              type="email"
              placeholder="Enter email"
              className={styles.emailInput}
            />
          </fieldset>
          <fieldset className={styles.formGroup}>
            <textarea
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              className={styles.messageInput}
              placeholder="Message"
            ></textarea>
          </fieldset>
          <fieldset className={styles.formGroup}>
            <button
              onClick={handleSubmit}
              type="button"
              className={styles.sendButton}
            >
              Send
            </button>
          </fieldset>
        </form>
        <ul className={styles.linklist}>
          <li>
            <a href="https://www.cybersmile.org/" className={styles.footerLink}>
              Partners
            </a>
          </li>
          <li>
            <a
              href="https://divly.com/sv/guides/NFT-skatt"
              className={styles.footerLink}
            >
              Legal Terms
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/about" className={styles.footerLink}>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
