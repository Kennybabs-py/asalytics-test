import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <h2>LOADING</h2>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loading;
