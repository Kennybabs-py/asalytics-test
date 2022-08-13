import React, { ReactNode } from "react";
import Main from "components/Main/Main";
import { useFetchAsset, endpoint, AssetDocument } from "hooks/fetchAsset";
import { request } from "graphql-request";

interface TestProps {
  children?: ReactNode;
}

import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const wrapper = ({ children }: TestProps) => (
  <QueryClientProvider client={queryClient}></QueryClientProvider>
);

const { result } = renderHook(() => useFetchAsset(), { wrapper });
async () => {
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
};
