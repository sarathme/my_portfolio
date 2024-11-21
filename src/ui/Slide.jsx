import ProjectCard from "./ProjectCard";
import styles from "./Slide.module.css";

function Slide({ data }) {
  return (
    <div className={styles.slide}>
      <ProjectCard project={data} />
    </div>
  );
}

export default Slide;
