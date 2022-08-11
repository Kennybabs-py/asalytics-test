import type { NextPage } from "next";
import dynamic from "next/dynamic";

import styles from "styles/Home.module.css";

const Header = dynamic(() => import("components/Header/Header"));
const Main = dynamic(() => import("components/Main/Main"));

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
