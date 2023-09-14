import { request, gql } from "graphql-request";
export const getDataForNewAndInsightsSection = async () => {
  const endpoint = "https://kimlongdiep.com/graphql";
  const query = gql`
    {
      posts {
        nodes {
          id
          title
          date
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
  try {
    const data = await request(endpoint, query);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const SearchPostsByKey = async ({ key }) => {
  const endpoint = "https://kimlongdiep.com/graphql";
  const query = gql`
    query GetPosts($search: String!) {
      posts(where: { search: $search }) {
        nodes {
          id
          title
          date
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

  try {
    const variables = { search: key };
    const data = await request(endpoint, query, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const GetPostDetailById = async (postId) => {
  const endpoint = "https://kimlongdiep.com/graphql";
  const query = gql`
    query GetPost($postId: Int!) {
      posts(where: { id: $postId }) {
        nodes {
          id
          title
          date
          postId
          excerpt
          content
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
  const variables = { postId };
  try {
    const data = await request(endpoint, query, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
