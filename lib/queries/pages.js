import { gql } from "@apollo/client";

export const PAGES = gql`
  query Pages {
    pages {
      edges {
        node {
          slug
        }
      }
    }
  }
`;
