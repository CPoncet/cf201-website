import { gql } from "@apollo/client";

export const CLIENTS = gql`
  query Clients {
    clients {
      edges {
        node {
          clients {
            customerLogo {
              sourceUrl
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
`;
