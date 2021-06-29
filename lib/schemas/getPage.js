import { gql } from "@apollo/client";
import fetchAPI from "../api";
import { GET_BUILDER } from "./getBuilder";
import { GET_SEO } from "./getSeo";

async function getPage(preview, slug) {
  const data = await fetchAPI(
    gql`
      query Page($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          slug
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

export default getPage;
