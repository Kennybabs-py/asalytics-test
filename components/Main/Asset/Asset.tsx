import React from "react";
import Image from "next/image";

import styles from "./Asset.module.scss";
import logodefault from "assets/logo.png";

interface AssetI {
  assetID?: number | undefined;
  available?: boolean | undefined;
  logo?: string | any;
  name?: string | undefined;
}

const Asset = ({ assets }: { assets: AssetI[] }) => {
  return (
    <div className={styles.list_assets}>
      {assets.map((asset: AssetI) => {
        const { assetID, available, logo, name } = asset;
        return (
          <div className={styles.asset_container} key={assetID}>
            <Image
              src={logo === null ? logodefault : logo}
              alt="ASAlytics Logo"
              width={30}
              height={62.94}
            />
            <div className={styles.name__button}>
              <span>{name}</span>
              <button
                style={{ backgroundColor: available ? "#6fd791" : "#BC3131" }}
              >
                {available ? "Available" : "Unavailable"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Asset;
