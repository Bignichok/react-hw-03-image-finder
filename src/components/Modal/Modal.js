import React from "react";
import styles from "./Modal.module.css";
import T from "prop-types";

const Modal = ({ onCloseModal, children }) => {
  return (
    <div className={styles.Overlay} onClick={onCloseModal}>
      <div className={styles.Modal}>{children}</div>
    </div>
  );
};

Modal.defaultProps = {
  onCloseModal: () => {},
};

Modal.propTypes = {
  onCloseModal: T.func,
  children: T.element.isRequired,
};

export default Modal;
