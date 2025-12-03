import React from "react";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroCard}>
        <h1>Що таке NeonForum?</h1>
        <p>
          NeonForum — це сучасна платформа для спілкування з неоновим дизайном у стилі кіберпанк. Створена
          для тих, хто цінує естетику майбутнього та функціональність сьогодення.
        </p>
        <p>
          Платформа дозволяє створювати пости, ділитися ідеями та взаємодіяти з спільнотою у
          унікальному візуальному середовищі.
        </p>
      </section>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>{"</>"}</div>
          <h3>Frontend</h3>
          <ul>
            <li>React 18 — Сучасна бібліотека для побудови інтерфейсів</li>
            <li>TypeScript — Типізація для надійності коду</li>
            <li>Tailwind CSS — Швидка стилізація</li>
            <li>Lucide Icons — Мінімалістичні іконки</li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🗄️</div>
          <h3>Backend</h3>
          <ul>
            <li>Node.js + Express — Швидкий бекенд</li>
            <li>PostgreSQL — Надійна СУБД</li>
            <li>JWT Authentication — Безпечна автентифікація</li>
            <li>RESTful API — Стандарт обміну даними</li>
          </ul>
        </div>
      </div>
    </div>
  );
}