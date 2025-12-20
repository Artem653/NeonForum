import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NeonForum</div>

      <nav className={styles.nav}>
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/posts">Всі пости</NavLink>
        <NavLink to="/create">Створити пост</NavLink>
      </nav>
    </header>
  );
}
