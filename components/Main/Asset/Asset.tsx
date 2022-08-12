import React, { Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { AssetProps } from "utils/types";
import styles from "./Asset.module.scss";
import logodefault from "assets/logo.png";

const [Fallback] = [
  dynamic(() => import("components/Loading/Fallback"), { suspense: true }),
];

const Asset = (props: AssetProps) => {
  const { asset } = props;

  const { logo, name, available, assetID } = asset;

  return (
    <Suspense fallback={<Fallback />}>
      <div className={styles.asset_container}>
        <Image
          src={logo === null ? logodefault : logo}
          alt={assetID}
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
    </Suspense>
  );
};

export default Asset;
