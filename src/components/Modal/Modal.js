import React from "react";
import styles from "./Modal.module.css";
const Modal = ({ onCloseModal, children }) => {
  return (
    <div className={styles.Overlay} onClick={onCloseModal}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

export default Modal;
