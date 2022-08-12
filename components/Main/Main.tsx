import React from "react";
import dynamic from "next/dynamic";
import { AssetI } from "utils/types";

import { fetchAsset } from "helpers/fetchAsset";
import styles from "./Main.module.scss";
import Asset from "./Asset/Asset";

const [Loading] = [dynamic(() => import("components/Loading/Loading"))];

const Main = () => {
  const { isLoading, data } = fetchAsset();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.main_section}>
      <div className={styles.main_section_header}>
        <span>List of Algorand Standard Assets on ASAlytics</span>
      </div>

      <div className={styles.list_assets}>
        {data &&
          data.map((asset: AssetI) => (
            <Asset key={asset.assetID} asset={asset} />
          ))}
      </div>
    </section>
  );
};

export default Main;
