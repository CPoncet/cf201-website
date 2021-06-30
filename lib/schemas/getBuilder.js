export const GET_BUILDER = `builder {
    builder {
      ... on Page_Builder_Builder_Hero {
        fieldGroupName
        intro
        buttons {
          externalLink
          internalLink {
            ... on Post {
              id
              slug
            }
            ... on Page {
              id
              slug
            }
            ... on MediaItem {
              id
              sourceUrl
              altText
            }
            ... on Client {
              id
              slug
            }
          }
          linkType
          text
        }
        image {
          sourceUrl
          altText
        }
        mediaRight
        mediaType
        title
        video
      }
      ... on Page_Builder_Builder_Titrage {
        fieldGroupName
        center
        sectionIntro
        sectionTitle
        titleType
      }
      ... on Page_Builder_Builder_TextContent {
        fieldGroupName
        text
      }
      ... on Page_Builder_Builder_MediaText {
        fieldGroupName
        mediaText {
          buttons {
            externalLink
            internalLink {
              ... on Post {
                id
                slug
              }
              ... on Page {
                id
                slug
              }
              ... on MediaItem {
                id
                sourceUrl
                altText
              }
              ... on Client {
                id
                slug
              }
            }
            linkType
            text
          }
          image {
            sourceUrl
            altText
          }
          imageColSize
          mediaRight
          mediaType
          text
          title
          video
        }
      }
      ... on Page_Builder_Builder_Cards {
        fieldGroupName
        button {
          externalLink
          internalLink {
            ... on Post {
              id
              slug
            }
            ... on Page {
              id
              slug
            }
            ... on MediaItem {
              id
              sourceUrl
              altText
            }
            ... on Client {
              id
              slug
            }
          }
          linkType
          text
        }
        cards {
          button {
            externalLink
            internalLink {
              ... on Post {
                id
                slug
              }
              ... on Page {
                id
                slug
              }
              ... on MediaItem {
                id
                sourceUrl
                altText
              }
              ... on Client {
                id
                slug
              }
            }
            linkType
            text
          }
          image {
            sourceUrl
            altText
          }
          shortDescription
          title
        }
      }
      ... on Page_Builder_Builder_BlocsOrangeFonce {
        fieldGroupName
        blocsOrange {
          backgroundImage {
            sourceUrl
            altText
          }
          content
          title
        }
      }
      ... on Page_Builder_Builder_BlocsOrangeClair {
        fieldGroupName
        blocsOrange {
          content
          icon {
            sourceUrl
            altText
          }
          title
        }
      }
      ... on Page_Builder_Builder_DerniersArticles {
        fieldGroupName
        pagination
        perPage
        lastnewsTitle
      }
    }
  }`;
