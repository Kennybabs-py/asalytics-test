import React from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import logo from "assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo_container}>
          <Image src={logo} alt="name" width={30} height={57.39} />
          <span>SAlytics</span>
        </div>

        <button className={styles.button}>ANALYZE ASAs</button>
      </nav>
    </header>
  );
};

export default Header;
