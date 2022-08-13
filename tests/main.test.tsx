import React, { ReactNode } from "react";
import Main from "components/Main/Main";
import { useFetchAsset, endpoint, assets } from "hooks/fetchAsset";
// import { request } from "graphql-request";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface TestProps {
  children?: ReactNode;
}

const queryClient = new QueryClient();

const wrapper = ({ children }: TestProps) => (
  <QueryClientProvider client={queryClient}></QueryClientProvider>
);

const { result } = renderHook(() => useFetchAsset(), { wrapper });
async () => {
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
};
