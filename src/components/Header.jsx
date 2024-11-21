import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="/assets/img/Logo_Web_High.webp" alt="" />
        </div>
        <ul className={`${styles["nav-list"]} mobile-hidden-flex`} role="list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
