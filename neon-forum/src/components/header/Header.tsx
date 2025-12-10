import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>NeonForum</h1>

      <nav className={styles.nav}>
        <a href="/">Головна</a>
        <a href="/posts">Всі пости</a>
        <a href="/create">Створити пост</a>
      </nav>

      <div className={styles.user}>
        <span>UA</span>
      </div>
    </header>
  );
}