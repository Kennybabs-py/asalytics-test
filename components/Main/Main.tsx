import React from "react";
import dynamic from "next/dynamic";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { AssetI } from "utils/types";
import { useFetchAsset } from "hooks/fetchAsset";
import styles from "./Main.module.scss";
import Asset from "./Asset/Asset";

const [Loading] = [dynamic(() => import("components/Loading/Loading"))];

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["asalist"], useFetchAsset);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Main = () => {
  const { isLoading, data } = useFetchAsset();

  const { data: otherData } = useFetchAsset();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.main_section} data-testid="section-main">
      <div className={styles.main_section_header}>
        <span>List of Algorand Standard Assets on ASAlytics</span>
      </div>

      <div className={styles.list_assets}>
        {data?.map((asset: AssetI, index: number) => (
          <Asset key={index} asset={asset} />
        ))}
      </div>
    </section>
  );
};

export default Main;
