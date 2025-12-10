import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Вітаємо на NeonForum!</h2>
      <p>Тут ви знайдете технічні новини, гайди, ігрові огляди та багато іншого.</p>
    </div>
  );
}