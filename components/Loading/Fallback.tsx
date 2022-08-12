import React from "react";
import styles from "./Loading.module.scss";

const Fallback = () => {
  return <div className={styles.fallback_loading}></div>;
};

export default Fallback;
