import { gql } from "@apollo/client";
import fetchAPI from "../api";

async function getOptions(preview) {
  const data = await fetchAPI(
    gql`
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
                  ... on Page {
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
              altText
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
                altText
              }
              link
              name
              whiteIcon {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `
  );

  return data?.options;
}

export default getOptions;
