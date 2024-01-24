import Banner from "src/componentes/Banner";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Banner />
      <h1 className={styles.titulo}>aqui jas a home</h1>
    </>
  );
}
