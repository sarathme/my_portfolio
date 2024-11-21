import styles from "./Section.module.css";

function Section({ children, heading, diagonal, className, id }) {
  return (
    <section
      className={`${styles.section} flow full-width  ${
        diagonal ? "diagonal" : ""
      } ${className ? className : ""}`}
      id={id}>
      <h1>{heading}</h1>
      {children}
    </section>
  );
}

export default Section;
