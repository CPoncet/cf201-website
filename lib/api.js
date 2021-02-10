const API_URL = process.env.API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log("error details", query, variables);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomepage(preview, slug) {
  const data = await fetchAPI(
    `
    query Homepage($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        homepage {
          references {
            displayType
            sectionIntro
            sectionTitle
          }
        }
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
                author {
                    node {
                        seo {
                            metaDesc
                            metaRobotsNofollow
                            metaRobotsNoindex
                            title
                            social {
                                youTube
                                wikipedia
                                twitter
                                soundCloud
                                pinterest
                                mySpace
                                linkedIn
                                instagram
                                facebook
                            }
                        }
                    }
                }
        builder {
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
                }
                title
              }
            }
          }
        }
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

export async function getOptions(preview) {
  const data = await fetchAPI(
    `
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
    `
  );

  return data?.options;
}

export async function getClients(preview) {
  const data = await fetchAPI(
    `
    query Clients {
      clients {
        edges {
          node {
            clients {
              customerLogo {
                sourceUrl
              }
              customerPopularity
              customerWebsite
            }
            id
            title
            slug
          }
        }
      }
    }
    `
  );

  return data?.clients;
}

export async function getPages() {
  const data = await fetchAPI(
    `
    query Pages {
      pages {
        edges {
          node {
            slug
          }
        }
      }
    }
    `
  );

  return data?.pages;
}

export async function getPage(preview, slug) {
  const data = await fetchAPI(
    `
    query Page($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        slug
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
      author {
          node {
              seo {
                  metaDesc
                  metaRobotsNofollow
                  metaRobotsNoindex
                  title
                  social {
                      youTube
                      wikipedia
                      twitter
                      soundCloud
                      pinterest
                      mySpace
                      linkedIn
                      instagram
                      facebook
                  }
              }
          }
      }
        builder {
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
                }
                title
              }
            }
          }
        }
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
