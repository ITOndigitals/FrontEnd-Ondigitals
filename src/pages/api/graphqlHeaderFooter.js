import { request, gql } from "graphql-request";
import { endPointApi } from "./endpoint";
export const GetDataFooter = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetDataFooter($id: Int!) {
      pages(where: { id: $id }) {
        nodes {
          content
          footerods {
            columService {
              title
              listServiceLeft
              listServiceRight
            }
            columFollowUs {
              linkZalo
              title
              listIcon {
                linkIcon
                nameIconFortawesome
              }
            }
            columExplore {
              listExplore
              title
            }
            title
          }
          translations {
            language {
              name
              code
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
    return data.pages;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const getTranslatedDataFooter = async (language) => {
  const idFooter = 44677;
  const data = await GetDataFooter(idFooter);
  const translation = data?.nodes?.[0]?.translations?.find(
    (translation) => translation?.language?.code === language
  );
  const updatedData = translation
    ? await GetDataFooter(translation.pageId)
    : data;
  const dataFooter = updatedData.nodes || null;
  return dataFooter;
};
