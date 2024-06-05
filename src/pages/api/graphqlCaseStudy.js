import { request, gql } from "graphql-request";
import { endPointApi } from "./endpoint";

export const GetListSlugCaseStudy = async () => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugCaseStudy {
      allCaseStudy(first: 100) {
        nodes {
          slug
          language {
            locale
            code
          }
          case_studyId
        }
      }
    }
  `;
  try {
    const data = await request(endpoint, query);
    return data.allCaseStudy.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const GetCaseStudyDetailBySlug = async (slug) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetCaseStudyDetailBySlug($slug: String!) {
      caseStudyBy(slug: $slug) {
        content
        cta {
          title
          textButton
          fieldGroupName
          content
          buttonColor
          backgroundColor
        }
        seo {
          fullHead
        }
        language {
          slug
        }
        translations {
          language {
            code
          }
          slug
        }
        caseStudyDetailPage {
          sectionIntro {
            backgroundcolor
            textColor
            imageBackground {
              altText
              sourceUrl
            }
            imageMoblie {
              altText
              sourceUrl
            }
            logoBrand {
              altText
              sourceUrl
            }
            titleCategory
            titleTagIndustry
          }
          sectionResults {
            backgroundColor
            title
            widthItem
            listItem {
              textItem
              titleItem
            }
          }
          sectionContentBody {
            sectionContentDetail {
              backgroundColor
              textColor
              layoutVideo {
                ... on Case_study_Casestudydetailpage_SectionContentBody_sectionContentDetail_LayoutVideo_LayoutVideoSingle {
                  backgroundColor
                  fieldGroupName
                  listVideo {
                    linkVideoItem
                  }
                  titleLeft
                  titleRight
                  widthVideo
                }
                ... on Case_study_Casestudydetailpage_SectionContentBody_sectionContentDetail_LayoutVideo_LayoutVideoSlide {
                  backgroundColor
                  fieldGroupName
                  listVideoSlide {
                    linkVideo
                    titleVideo
                  }
                }
              }
              listImage {
                imageItem {
                  altText
                  sourceUrl
                }
              }
              textDecs
              titleRight
              titleLeft
              titleListImage
              widthImage
              heightImage
              objectFitImage
            }
          }
        }
        categories {
          nodes {
            slug
            description
            name
          }
        }
        tags {
          nodes {
            slug
            name
            description
          }
        }
      }
    }
  `;
  const variables = { slug };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
};
export const GetDataPageCaseStudy = async (id, languageCode) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugCaseStudy(
      $id: Int!
      $languageCode: LanguageCodeFilterEnum!
    ) {
      pageBy(pageId: $id) {
        pageCaseStudy {
          sectionIntro {
            backgroundColor
            content
            textScroll
            textScrollDecs
          }
          sectionListCaseStudy {
            backgroundColor
            title
            titleService
            titleSortby
            tittleIndustry
          }
        }
        translations {
          language {
            code
          }
          pageId
        }
        cta {
          backgroundColor
          buttonColor
          content
          textButton
          title
        }
        seo {
          fullHead
        }
      }
      allCaseStudy(
        first: 4
        where: {
          language: $languageCode
          orderby: { field: DATE, order: DESC }
        }
      ) {
        nodes {
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          slug
          title
          categories {
            nodes {
              slug
              name
              description
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;
  const variables = { id, languageCode };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
