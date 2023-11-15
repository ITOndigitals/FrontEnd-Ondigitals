const { gql } = require("@apollo/client");

export const GET_POSTS_BY_FILTER = gql`
  query GetPosts(
    $key: String!
    $first: Int!
    $after: String!
    $language: LanguageCodeFilterEnum!
    $order: OrderEnum!
  ) {
    posts(
      after: $after
      first: $first
      where: {
        search: $key
        language: $language
        orderby: { field: DATE, order: $order }
      }
    ) {
      nodes {
        id
        title
        date
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        link
      }
      pageInfo {
        endCursor
        hasNextPage
        
      }
    }
  }
`;
