import { gql } from "@apollo/client";

export const OPTIONS = gql`
  query Options {
    options {
      siteOptions {
        customStyles
        fieldGroupName
        footerText {
          buttons {
            externalLink
            internalLink {
              ... on Post {
                id
                slug
              }
            }
            text
            linkType
          }
          text
          title
        }
        headScripts
        introRs
        legalMenu {
          link {
            ... on Post {
              id
              slug
            }
            ... on Page {
              id
              slug
            }
          }
          text
        }
        mainLogo {
          sourceUrl
        }
        mainMenu {
          isHomepage
          link {
            ... on Page {
              id
              slug
            }
            ... on Post {
              id
              slug
            }
          }
          text
        }
        social {
          icone {
            sourceUrl
          }
          link
          name
          whiteIcon {
            sourceUrl
          }
        }
      }
    }
  }
`;
