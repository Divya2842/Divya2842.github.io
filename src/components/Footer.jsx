import styles from "./footer.module.css";
export default function Footer({ completedtodos, totaltodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.line}>Completed To-Dos:{completedtodos}</span>
      <span className={styles.line}>Total To-Dos:{totaltodos}</span>
    </div>
  );
}
