import styles from "./Experience.module.css";

function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.leftBubble}>Bubble</div>
      <div className={styles.dot}></div>
      <div className={styles.bubble}>Bubble</div>
      <div className={styles.bubble}>Bubble</div>
      <div className={styles.dot}></div>
      <div className={styles.bubble}>Bubble</div>
    </div>
  );
}

export default Experience;
