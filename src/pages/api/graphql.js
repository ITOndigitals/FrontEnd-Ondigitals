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
  const endpoint = "https://kimlongdiep.com/graphql";
  const query = gql`
    query GetPost($slug: String!) {
      postBy(slug: $slug) {
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

