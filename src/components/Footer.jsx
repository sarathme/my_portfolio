import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} full-width`}>
      <p>
        Designed And Developed with 🤍 by Sarasraman &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
