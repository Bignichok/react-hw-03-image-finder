import React from "react";
import T from "prop-types";

import styles from "./Button.module.css";

const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler} className={styles.Button}>
    {text}
  </button>
);

Button.defaultProps = {
  text: "Button",
  clickHandler: () => {},
};

Button.propTypes = {
  text: T.string,
  clickHandler: T.func,
};

export default Button;
