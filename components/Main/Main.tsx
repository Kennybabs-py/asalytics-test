import React from "react";
import dynamic from "next/dynamic";

import styles from "./Main.module.scss";
const Asset = dynamic(() => import("./Asset/Asset"));

const Main = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.main_section_header}>
        <span>List of Algorand Standard Assets on ASAlytics</span>
      </div>

      <div className={styles.list_assets}>
        <Asset />
      </div>
    </section>
  );
};

export default Main;
