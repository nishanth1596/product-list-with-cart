import Pizza from "../../features/Pizza/Pizza";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <h2 className={"a"}>Desserts</h2>
      <Pizza />
    </main>
  );
}

export default Main;
