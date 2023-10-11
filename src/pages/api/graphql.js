import { request, gql } from "graphql-request";
import { endPointApi } from "./endpoint";

export const getDataForNewAndInsightsSection = async (language) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPosts($language: LanguageCodeFilterEnum!) {
      posts(where: { language: $language }, first: 9) {
        nodes {
          id
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          link
        }
      }
    }
  `;
  const variables = { language };
  try {
    const data = await request(endpoint, query, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const SearchPostsByKey = async ({ key }) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPosts($search: String!) {
      posts(where: { search: $search }) {
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
      }
    }
  `;

  try {
    const variables = { search: key };
    const data = await request(endpoint, query, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const GetPostDetailBySlug = async (slug) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPost($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        date
        postId
        excerpt
        content
        language {
          slug
        }
        translations {
          language {
            code
          }
          slug
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        link
      }
    }
  `;
  const variables = { slug };
  try {
    const data = await request(endpoint, query, variables);
    return data.postBy;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};

export const GetDataHomepage = async () => {
  const endpoint = endPointApi;
  const query = gql`
    query get_content_front_page {
      pages(where: { title: "Homepage" }) {
        nodes {
          seo {
            description
            fullHead
            title
          }
          homePageInputContent {
            textInSession1
            session1LeftImage {
              sourceUrl
              altText
            }
            mainImageOfSession1 {
              sourceUrl
              altText
              seo {
                title
                focusKeywords
              }
            }
            session2DesText
            session2Title
            sessionText2
            session3GroupNumberClient {
              text1
              number1
              text2
              number2
              text3
              number3
            }
            session3BellowText
            session3SecondTitle
            session3Title
            session4Title
            session4ButtonText
            session4ButtonReadMore
            session5NewsTitle
            session5DiscoverMore
            session5ReadMoreNews
          }
          language {
            name
          }
        }
      }
      services {
        nodes {
          title
          content
          featuredImage {
            __typename
          }
          uri
        }
      }
      clients {
        nodes {
          title
          slug
          uri
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
              slug
            }
          }
        }
      }
      allCaseStudy {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
              slug
              uri
            }
          }
        }
      }
    }
  `;

  try {
    const data = await request(endpoint, query);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return {};
  }
};

export const GetListSlugPosts = async () => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugPosts {
      posts(first: 100) {
        nodes {
          slug
          postId
          language {
            locale
            code
          }
        }
      }
    }
  `;
  try {
    const data = await request(endpoint, query);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};