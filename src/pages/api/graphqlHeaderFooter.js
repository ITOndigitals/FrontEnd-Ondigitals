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
              titleServices
              services {
                listServices
                title
                linkservice
              }
            }
            columFollowUs {
              linkZalo
              title
              inputDmca
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
export const GetDataHeader = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetDataHeader($id: Int!) {
      pageBy(pageId: $id) {
        translations {
          pageId
          language {
            code
            name
          }
        }
        header {
          textRequestCredential
          headLineMenu
          contentFormRequest {
            titleForm
            textInput {
              textLable
              textPlaceholder
            }
            textCheckbox
            textButton
            contentNoteError
            contentNoteSuccess
            contentBelowButton
          }
        }
      }
    }
  `;
  const variables = { id };
  try {
    const data = await request(endpoint, query, variables);
    return data.pageBy;
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
export const GetDataMenuHeader = async (languageCode) => {
  const endpoint = endPointApi;
  const locationFilter =
    languageCode === "EN" ? "PRIMARY" : `PRIMARY___${languageCode}`;
  const query = gql`
    query GetDataHeader($languageCode: LanguageCodeFilterEnum!) {
      menuItems(where: { location: ${locationFilter} }) {
        nodes {
          id
          label
          path
        }
      }
      serviceParents(
        where: { language: $languageCode, orderby: { field: DATE, order: ASC } }
      ) {
        nodes {
          slug
          databaseId
          serviceHomepage {
            name
          }
        }
      }
    }
  `;
  const variables = { languageCode };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};
export const getDataMenu = async (languageCode) => {
  const data = await GetDataMenuHeader(languageCode);
  const idPage = 45869;
  const [dataHeader] = await Promise.all([
    GetDataHeader(idPage),
  ]);
  const translation = dataHeader.translations.find(
    (t) => t.language.code === languageCode
  );
  const updatedData = translation
    ? await GetDataHeader(translation.pageId)
    : dataHeader;
  const { menuItems, serviceParents } = data;
  const listServices = serviceParents?.nodes;
  const updatedMenuItems = menuItems?.nodes.map((item, index) => {
    if (index === 1) {
      return {
        ...item,
        listServices,
      };
    }
    return {
      ...item,
    };
  });

  return { dataMenu: updatedMenuItems, updatedData };
};
