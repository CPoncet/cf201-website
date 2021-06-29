export const GET_SEO = `seo {
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
  }`;
