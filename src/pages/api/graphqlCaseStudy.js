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
          sectionDigitalContent {
            paddingBottom
            titleBody
            titleFooter
            titleLeft
            titleRight
            widthImage
            listImage {
              titleImage
              itemImage {
                altText
                sourceUrl
              }
            }
          }
          sectionVideo {
            backgroundColor
            backgroundColorVideoSingle
            marginBottom
            marginTop
            titleLeft
            titleRight
            titleSlider
            listVideoSlide {
              linkVideo
            }
            listVideoSingle {
              linkVideo
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
