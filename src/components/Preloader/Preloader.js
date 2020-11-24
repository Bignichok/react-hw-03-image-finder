import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Preloader.module.css";

const Preloader = () => (
  <div className={styles.Preloader}>
    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
  </div>
);

export default Preloader;
