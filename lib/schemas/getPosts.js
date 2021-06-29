import { gql } from "@apollo/client";
import fetchAPI from "../api";

export const GET_POSTS = gql`
  query Posts($first: Int, $after: String, $last: Int, $before: String) {
    posts(first: $first, after: $after, last: $last, before: $before) {
      edges {
        cursor
        node {
          slug
          title
          excerpt
          imageUne {
            imageEnAvant {
              sourceUrl
              altText
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
async function getPosts(first, after, last, before) {
  const data = await fetchAPI(GET_POSTS, {
    variables: {
      first,
      after,
      last,
      before,
    },
  });

  return data?.posts;
}

export default getPosts;
