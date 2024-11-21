import { useEffect, useRef, useState } from "react";
import styles from "./SkillBadge.module.css";

function SkillBadge({ skill, strokeWidth = 10 }) {
  const ref = useRef();

  const [badgeOptions, setBadgeOptions] = useState({});

  const { percentage = 1, skillName = "", iconId, known, familiar } = skill;

  useEffect(() => {
    const radius = Math.ceil(ref.current.clientWidth / 2 - strokeWidth / 2);

    const dashArray = Math.floor(2 * 3.14 * radius);
    const dashArrayOffset = dashArray - (percentage * dashArray) / 100;

    ref.current.style.setProperty("--dashArray", dashArray);
    ref.current.style.setProperty("--dashArrayOffset", dashArrayOffset);
    ref.current.style.setProperty("--strokeWidth", `${strokeWidth / 16}rem`);

    setBadgeOptions({
      width: ref.current.clientWidth,
      radius,
    });
  }, [strokeWidth, percentage]);

  return (
    <div ref={ref} className={styles.skillBadge}>
      <svg
        viewBox={`0 0 ${badgeOptions.width || 0} ${badgeOptions.width || 0}`}>
        <circle cx="50%" cy="50%" r={badgeOptions.radius} />
        <circle cx="50%" cy="50%" r={badgeOptions.radius} />
      </svg>
      <div className={styles.icon}>
        <svg viewBox="0 0 50 50">
          {/* <rect x={0} y={0} width={50} height={50} fill="none" stroke="red" /> */}
          <use xlinkHref={`#${iconId}`} />
        </svg>
      </div>
      <h3>{skillName}</h3>

      {(known || familiar) && (
        <div className={styles.details}>
          <h5>{skillName}</h5>
          {known.length > 0 && (
            <>
              <h6>What I know?</h6>
              <ul>
                {known.map((concept) => (
                  <li key={concept}>{concept}</li>
                ))}
              </ul>
            </>
          )}

          {familiar.length > 0 && (
            <>
              <h6>Familiar With</h6>
              <ul>
                {familiar.map((concept) => (
                  <li key={concept}>{concept}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SkillBadge;
