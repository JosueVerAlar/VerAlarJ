import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="inicio" className={styles.container}>
      <h1 className={styles.title}>Hola, soy [Josué Vergara]</h1>
      <p className={styles.subtitle}>Bienvenido a mi portafolio profesional</p>
    </section>
  );
}
