import { gql } from "@apollo/client";
import fetchAPI from "../api";

async function getPost(preview, slug) {
  const data = await fetchAPI(
    gql`
      query Post($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          author {
            node {
              name
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
          comments {
            edges {
              node {
                author {
                  node {
                    name
                  }
                }
                content
                date
              }
            }
          }
          content
          date
          excerpt
          seo {
            canonical
            title
            metaDesc
            focuskw
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphAuthor
            opengraphDescription
            opengraphTitle
            opengraphDescription
            opengraphImage {
              altText
              sourceUrl
              srcSet
            }
            opengraphUrl
            opengraphSiteName
            opengraphPublishedTime
            opengraphModifiedTime
            twitterTitle
            twitterDescription
            twitterImage {
              altText
              sourceUrl
              srcSet
            }
            breadcrumbs {
              url
              text
            }
            cornerstone
            schema {
              pageType
              articleType
              raw
            }
          }
          imageUne {
            imageEnAvant {
              altText
              sourceUrl
              srcSet
            }
          }
          modified
          slug
          status
          title
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

  return data?.post;
}

export default getPost;
