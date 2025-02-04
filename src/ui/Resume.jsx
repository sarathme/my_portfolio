import styles from "./Resume.module.css";
function Resume() {
  return (
    <div className={styles.resume}>
      <a href={import.meta.env.VITE_FIREBASE_TOKEN} target = "_blank">
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default Resume;
