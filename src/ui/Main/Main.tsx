import Pizza from "../../features/Pizza/Pizza";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Pizza />
    </main>
  );
}

export default Main;
