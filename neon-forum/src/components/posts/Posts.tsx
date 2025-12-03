import React from "react";
import styles from "./posts.module.css";
import pc from "../../assets/pc.jpg";

export default function Posts() {
  return (
    <div className={styles.container}>
      <h1>Всі пости</h1>
      <p className={styles.counter}>Знайдено постів: 10</p>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <label>Пошук</label>
            <input placeholder="Пошук постів..." />
          </div>

          <div className={styles.tags}>
            <h3>Теги</h3>
            <ul>
              <li>Gaming</li>
              <li>Coding</li>
              <li>News</li>
              <li>Hardware</li>
              <li>Tutorials</li>
              <li>IndieDev</li>
              <li>Humor</li>
            </ul>
          </div>
        </aside>

        <section className={styles.posts}>
          <article className={styles.post}>
            <h2>Найкращі RGB-сетапи 2025: огляд топових геймерських конфігурацій</h2>
            <img src={pc} alt="pc" />
            <p>
              У цьому огляді ми розглянемо найкращі геймерські сетапи з RGB-підсвіткою, які стали хітами 2025 року...
            </p>
          </article>

          {/* список постів мб? */}
        </section>
      </div>
    </div>
  );
}