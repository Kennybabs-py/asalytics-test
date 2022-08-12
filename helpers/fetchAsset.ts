import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";
const endpoint = "https://analytics-api.herokuapp.com/analytics";

function fetchAsset() {
  return useQuery(["MyQuery"], async () => {
    const {
      asalist: { results },
    } = await request(
      endpoint,
      gql`
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
      `
    );

    return results;
  });
}

export { fetchAsset };
