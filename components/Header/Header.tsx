import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "assets/logo.png";

// type Props = {};

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo_container}>
          <Image src={logo} alt="ASAlytics Logo" width={30} height={62.94} />
          <span>SAlytics</span>
        </div>

        <button className={styles.button}>ANALYZE ASAs</button>
      </nav>
    </header>
  );
};

export default Header;
