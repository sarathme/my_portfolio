import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  console.log(project.description.split("/n"));
  return (
    <div className={`${styles.projectCard}`}>
      <img
        src={
          project.imageUrl
            ? project.imageUrl
            : `/assets/img/${project.catogary}_dev.png`
        }
        alt={`Screenshot of ${project.title} project`}
      />

      <div className={`${styles.cardBody} flow`}>
        <h3>
          {project.title}{" "}
          {project.status ? (
            <span className={project.status[0] ? styles.live : ""}>
              {project.status[1]}
            </span>
          ) : (
            ""
          )}
        </h3>
        {project.description.split("/n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {project.cta && (
          <div className={styles.cta}>
            {project.cta.map((link) => (
              <a key={link.name} href={link.url} target="_blank">
                <svg>
                  <use xlinkHref={`#${link.icon}`} />
                </svg>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
      {project.techStacks && (
        <div className={styles.techStack}>
          {project.techStacks.map((tech) => (
            <>
              <h4 key={tech}>{tech}</h4>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
