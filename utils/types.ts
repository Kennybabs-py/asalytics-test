interface AssetI {
  assetID?: string;
  available?: boolean | undefined;
  logo?: string | any;
  name?: string | undefined;
}

interface AssetProps {
  asset: AssetI;
}

export type { AssetProps, AssetI };
