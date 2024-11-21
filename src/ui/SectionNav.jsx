import { useState } from "react";
import styles from "./SectionNav.module.css";

function SectionNav({ options, handleFilter, colorScheme = "primary" }) {
  const [activeTab, setActiveTab] = useState(options[0].value);

  function handleClick(e, value) {
    e.preventDefault();
    setActiveTab(value);
    handleFilter(value);
  }

  return (
    <div className={`${styles.navContainer} ${styles[colorScheme]}`}>
      <ul className={`${styles.sectionNav}`} role="list">
        {options.map((option, i) => (
          <li key={i}>
            <button
              onClick={(e) => handleClick(e, option.value)}
              className={activeTab === option.value ? styles.active : ""}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionNav;
