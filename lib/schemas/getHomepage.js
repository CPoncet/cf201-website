import { gql } from "@apollo/client";
import fetchAPI from "../api";
import { GET_BUILDER } from "./getBuilder";
import { GET_SEO } from "./getSeo";

async function getHomepage(preview, slug) {
  const data = await fetchAPI(
    gql`
      query Homepage($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          homepage {
            references {
              displayType
              sectionIntro
              sectionTitle
            }
          }
          ${GET_SEO}
          
          ${GET_BUILDER}
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  return data?.page;
}

export default getHomepage;
