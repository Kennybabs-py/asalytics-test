import React from "react";
import Image from "next/image";
import styles from "./Asset.module.scss";
import logo from "assets/logo.png";

type Props = {};

const Asset = (props: Props) => {
  return (
    <div className={styles.asset_container}>
      <Image src={logo} alt="ASAlytics Logo" width={30} height={62.94} />

      <div className={styles.name__button}>
        <span>algorand</span>
        <button>available</button>
      </div>
    </div>
  );
};

export default Asset;
