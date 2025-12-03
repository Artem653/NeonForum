import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© 2025 NeonForum</div>
        <div className={styles.small}>Made with ♥ in neon</div>
      </div>
    </footer>
  );
}