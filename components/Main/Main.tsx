import React from "react";
import dynamic from "next/dynamic";

import { fetchAsset } from "helpers/fetchAsset";
import styles from "./Main.module.scss";

const Asset = dynamic(() => import("./Asset/Asset"));
const Loading = dynamic(() => import("components/Loading/Loading"));

const Main = () => {
  const { isLoading, isError, data } = fetchAsset();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.main_section}>
      <div className={styles.main_section_header}>
        <span>List of Algorand Standard Assets on ASAlytics</span>
      </div>
      <Asset assets={data} />
    </section>
  );
};

export default Main;
