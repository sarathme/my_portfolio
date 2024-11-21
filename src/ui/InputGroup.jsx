import styles from "./InputGroup.module.css";

function InputGroup({ children, id, label, error, isTouched }) {
  return (
    <div
      className={`${styles.input_group} ${
        isTouched && error ? "not_valid" : ""
      }`}>
      <label htmlFor={id} data-error={isTouched && error ? error : ""}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default InputGroup;
