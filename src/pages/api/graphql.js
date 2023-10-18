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
export const GetDataHomepage = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query getDataHomePage($id: Int!) {
      pages(where: {id: $id}) {
        nodes {
          slug
          pageId
          language {
            slug
            code
            name
          }
          homePageInputContent {
            caseStudySessionButtonText
            caseStudySessionTitle
            fieldGroupName
            introSectionLeftImage {
              altText
              sourceUrl
            }
            introSectionRightImage {
              altText
              sourceUrl
            }
            introSectionTextDescription
            introSectionTextHello
            introSectionTextScrollDown1
            introSectionTextScrollDown2
            newSectionTextButton
            newSectionTextReadFull
            newSectionTitle
            newSectionTextDesc
            partnerSectionDesc
            partnerSectionGroupNumberClient {
              fieldGroupName
              number1
              number2
              number3
              text1
              text2
              text3
            }
            partnerSectionTitle
            partnerSectionTitleImage
            serviceSectionDesc
            serviceSectionTextButton
            serviceSectionTitle
            session3ButtonBellow
          }
          translations {
            language {
              slug
              code
              name
            }
            pageId
          }
        }
      }
      clients {
        nodes {
          featuredImage {
            node {
              sourceUrl
              title
            }
          }
        }
      }
      services {
        nodes {
          slug
          title
          editorBlocks {
          ... on CoreParagraph {
              attributes {
                content
              }
            }
          }
        }
      }
    }
  `;
  const variables = { id };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const GetDataFooter = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query getDataFooter($id: Int!) {
      pages(where: {id: $id}) {
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
  const variables = { id };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};