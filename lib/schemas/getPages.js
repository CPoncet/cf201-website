import { gql } from "@apollo/client";
import fetchAPI from "../api";

async function getPages() {
  const data = await fetchAPI(
    gql`
      query Pages {
        pages {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );

  return data?.pages;
}

export default getPages;
