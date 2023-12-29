const { gql } = require("@apollo/client");

export const GET_POSTS_BY_FILTER = gql`
  query GetPosts(
    $key: String!
    $first: Int!
    $after: String!
    $language: LanguageCodeFilterEnum!
    $order: OrderEnum!
    $idCategory: Int!
  ) {
    posts(
      after: $after
      first: $first
      where: {
        search: $key
        language: $language
        categoryId: $idCategory
        orderby: { field: DATE, order: $order }
      }
    ) {
      nodes {
        id
        title
        date
        excerpt
        slug
        postId
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            slug
            name
            description
            categoryId
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
export const GET_POSTS_BY_TAG = gql`
  query GetPostsByTag($categoryId: Int!) {
    posts(
      where: { orderby: { field: DATE, order: DESC }, categoryId: $categoryId }
      first: 5
    ) {
      nodes {
        slug
        title
        id
      }
    }
  }
`;
export const GET_CATEGORY_POST = gql`
  query GetCategoryPost($language: LanguageCodeFilterEnum!) {
    categories(where: { language: $language }) {
      nodes {
        name
        slug
        categoryId
      }
    }
  }
`;
export const GET_LIST_SERVICES_BY_CATEGORY = gql`
  query GetCategoryPost($ID: Int!) {
    services(where: { categoryId: $ID, orderby: { field: DATE, order: ASC } }) {
      nodes {
        serviceHomepage {
          name
          secondaryColor
        }
        slug
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;
