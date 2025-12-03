import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <span className={styles.logoCircle}>N</span>
            <span className={styles.logoText}>NeonForum</span>
          </div>

          <nav className={styles.nav}>
            <a className={styles.link} href="#">Головна</a>
            <a className={`${styles.link} ${styles.active}`} href="#">Всі пости</a>
            <a className={styles.link} href="#">Створити пост</a>
          </nav>
        </div>

        <div className={styles.right}>
          <div className={styles.lang}>UA ▾</div>
          <div className={styles.avatar} />
        </div>
      </div>

      <div className={styles.neonLine} />
    </header>
  );
}