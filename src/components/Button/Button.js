import React from "react";
import styles from "./Button.module.css";
import T from "prop-types";

const Button = ({ text, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles.Button}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  clickHandler: () => {},
};

Button.propTypes = {
  text: T.string,
  clickHandler: T.func,
};

export default Button;
