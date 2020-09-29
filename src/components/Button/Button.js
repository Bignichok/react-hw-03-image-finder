import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles.Button}>
      {text}
    </button>
  );
};

export default Button;
