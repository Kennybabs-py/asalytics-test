import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import styles from "styles/Home.module.css";

const Header = dynamic(() => import("components/Header/Header"));
const Main = dynamic(() => import("components/Main/Main"));
const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </QueryClientProvider>
  );
};

export default Home;
