const { gql } = require("@apollo/client");

export const GET_FOOTER_DATA = gql`
  query getDataFooter($id: Int!) {
    pages(where: { id: $id }) {
      nodes {
        pageId
        language {
          slug
          name
        }
        footer {
          address
          column1Title
          column2Title
          column3Title
          titleAddress
          titleHotline
          titleWorkTime
          hotline
          workTime
          facebook {
            title
            url
          }
          instagram {
            title
            url
          }
          zalo {
            title
            url
          }
          linked {
            title
            url
          }
          link1 {
            title
            url
          }
          link2 {
            title
            url
          }
          link3 {
            title
            url
          }
          link4 {
            title
            url
          }
          link5 {
            title
            url
          }
          link6 {
            title
            url
          }
          link7 {
            title
            url
          }
          link8 {
            title
            url
          }
          link9 {
            title
            url
          }
          link10 {
            title
            url
          }
          link11 {
            title
            url
          }
          link12 {
            title
            url
          }
          link13 {
            title
            url
          }
          link14 {
            title
            url
          }
          linkExplore1 {
            title
            url
          }
          linkExplore2 {
            title
            url
          }
          linkExplore3 {
            title
            url
          }
          linkExplore4 {
            title
            url
          }
        }
        translations {
          language {
            slug
            name
          }
          pageId
        }
      }
    }
  }
`;

export const GET_TEST = gql`
  query getDataFooteR {
    pageBy(pageId: 44514) {
      id
      title
      editorBlocks(flat: false) {
        ... on CoreGroup {
          anchor
          innerBlocks {
            ... on CoreImage {
              attributes {
                alt
                src
              }
            }
            ... on CoreParagraph {
              attributes {
                content
              }
            }
          }
        }
      }
    }
  }
`;
