import styles from "./SkillsContainer.module.css";
function SkillsContainer({ data, render }) {
  return (
    <div className={styles.skillsContainer} key={data[0].id}>
      {data.map(render)}
    </div>
  );
}

export default SkillsContainer;
