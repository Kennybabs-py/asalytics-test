import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("components/Header/Header"));
// const Main = dynamic(()=> import('components/Main/Main'))

const Home: NextPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
