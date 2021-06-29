import { gql } from "@apollo/client";
import fetchAPI from "../api";
import { GET_BUILDER } from "./getBuilder";
import { GET_SEO } from "./getSeo";

async function getBlogpage(preview, slug) {
  const data = await fetchAPI(
    gql`
      query Blogpage($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          
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

export default getBlogpage;
