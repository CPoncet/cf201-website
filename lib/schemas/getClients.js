import { gql } from "@apollo/client";
import fetchAPI from "../api";

async function getClients(preview) {
  const data = await fetchAPI(
    gql`
      query Clients {
        clients {
          edges {
            node {
              clients {
                customerLogo {
                  sourceUrl
                  altText
                }
                customerPopularity
                customerWebsite
              }
              id
              title
              slug
            }
          }
        }
      }
    `
  );

  return data?.clients;
}

export default getClients;
