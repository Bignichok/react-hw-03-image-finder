import React from "react";
import T from "prop-types";

import styles from "./Modal.module.css";

const Modal = ({ onCloseModal, children }) => (
  <div className={styles.Overlay} onClick={onCloseModal}>
    <div className={styles.Modal}>{children}</div>
  </div>
);

Modal.defaultProps = {
  onCloseModal: () => {},
};

Modal.propTypes = {
  onCloseModal: T.func,
  children: T.element.isRequired,
};

export default Modal;
