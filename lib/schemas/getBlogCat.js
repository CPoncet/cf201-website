import { gql } from "@apollo/client";
import fetchAPI from "../api";

async function getBlogCat(preview, slug) {
  const data = await fetchAPI(
    gql`
      query BlogCat($id: ID!, $idType: CategoryIdType!) {
        category(id: $id, idType: $idType) {
          name
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data?.category;
}

export default getBlogCat;
