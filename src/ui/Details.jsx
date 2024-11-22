import styles from "./Details.module.css";

function Details({ children }) {
  return (
    <div className={styles.details}>
      <ul className={styles.socials} role="list">
        <li>
          <a href="https://linkedin.com/in/sarasraman-n-46003420b">
            <svg>
              <use xlinkHref="#linkedin" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarathsatheesh603@gmail.com">
            <svg>
              <use xlinkHref="#mail" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/sarathme">
            <svg>
              <use xlinkHref="#github" />
            </svg>
          </a>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Details;
