import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://analytics-api.herokuapp.com/analytics";

const assets = gql`
  query {
    asalist {
      results {
        assetId
        available
        logo
        name
      }
    }
  }
`;

function useFetchAsset() {
  return useQuery(["MyQuery"], async () => {
    const {
      asalist: { results },
    } = await request(endpoint, assets);

    return results;
  });
}

export { useFetchAsset, request, endpoint, assets };
