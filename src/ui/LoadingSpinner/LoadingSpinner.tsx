import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default LoadingSpinner;
