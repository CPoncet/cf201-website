import { gql } from "@apollo/client";
import fetchAPI from "../api";

async function getBlogCats(preview, slug) {
  const data = await fetchAPI(
    gql`
      query getBlogCats {
        categories {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  );

  return data?.categories;
}

export default getBlogCats;
