import styles from "./home.module.css";
import pcImage from "../../assets/pc.jpg";

export default function HomePage() {
  return (
    <section className={styles.home}>
      <h1>Що таке NeonForum?</h1>
      <p>Сучасна платформа з неоновим дизайном</p>
      <img src={pcImage} alt="PC" />
    </section>
  );
}
