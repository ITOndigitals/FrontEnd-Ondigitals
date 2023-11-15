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

export const getDataPageBlog = async (language, first, before, after, last) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPosts(
      $language: LanguageCodeFilterEnum!
      $after: String
      $before: String
      $first: Int
      $last: Int
    ) {
      posts(
        where: { language: $language }
        first: $first
        before: $before
        after: $after
        last: $last
      ) {
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
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;
  const variables = { language, first, before, after, last };
  try {
    const data = await request(endpoint, query, variables);
    return data.posts;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const SearchPostsByKey = async (key, language) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPosts($key: String!, $language: LanguageCodeFilterEnum!) {
      posts(where: { search: $key, language: $language }) {
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
  const variables = { key, language };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return (data = await request(endpoint, query, variables));
  }
};

export const GetPostDetailBySlug = async (slug, language) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPostDetailBySlug(
      $slug: String!
      $language: LanguageCodeFilterEnum!
    ) {
      postBy(slug: $slug) {
        id
        title
        date
        postId
        slug
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
      allBlogsContent(where: { language: $language }) {
        nodes {
          textBlogandBlogDetail {
            blogsDecs
            blogsTitle
            breadcrumHome {
              title
              url
            }
            breadcrumPage {
              title
              url
            }
            breadcrumPageDetail {
              title
              url
            }
            breadcrumTitleBlogDetail
            textButton
            textReadMore
          }
        }
      }
    }
  `;
  const variables = { slug, language };
  try {
    const data = await request(endpoint, query, variables);
    return data;
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
export const GetDataHomepage = async (id, languageCode) => {
  const endpoint = endPointApi;
  const query = gql`
    query getDataHomePage($id: Int!, $languageCode: LanguageCodeFilterEnum!) {
      pages(where: { id: $id }) {
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
            partnerSectionTextButton
            contactFormDecs
            contactFormTextButton
            contactFormTextRequiredField
            contactFormTitle
            linkPrivacyPolicy {
              url
              title
            }
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
              id
              sourceUrl
              title
            }
          }
        }
      }
      services(
        where: { orderby: { order: ASC, field: DATE }, language: $languageCode }
        first: 7
      ) {
        nodes {
          slug
          title
          excerpt
          serviceHomepage {
            color
            secondaryColor
            name
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      allCaseStudy {
        nodes {
          case_studyId
          title
          slug
          content
          caseStudyHomepage {
            caseStudyTextButton
            caseStudyTitle
            caseStudyTextButtonItem
            caseStudyYear
          }
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
  const variables = { id, languageCode };
  try {
    const data = await request(endpoint, query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const GetListSlugService = async () => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugService {
      services(first: 100) {
        nodes {
          slug
          serviceId
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
    return data.services.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};

export const GetServiceDetailBySlug = async (slug) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetServiceDetailBySlug($slug: String!) {
      serviceBy(slug: $slug) {
        content
        title
        translations {
          language {
            code
          }
          slug
        }
        language {
          slug
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        serviceHomepage {
          color
          name
          secondaryColor
          titleBelowTextHeadingPageServiceDetail
          sectionClientFeedbacksServiceDetail {
            backgroundcolor
            buttonLink {
              title
              url
            }
            headTitle
            textBelowTitle
          }
          sectionContentDetail {
            ... on Service_Servicehomepage_SectionContentDetail_ContentNoImage {
              content
              title
            }
            ... on Service_Servicehomepage_SectionContentDetail_ContentWithImage {
              content
              image {
                altText
                sourceUrl
              }
              title
            }
          }
          layoutContentServiceDetail {
            ... on Service_Servicehomepage_LayoutContentServiceDetail_SectionIntro {
              backgroundColor
              textLeft
              textRight
              textTitle
              imageSectionIntro {
                altText
                sourceUrl
              }
            }
          }
        }
      }
      allCardReviews(
        first: 3
        where: { orderby: { field: DATE, order: DESC } }
      ) {
        nodes {
          card_reviewId
          cardReview {
            contentCardReview {
              ... on Card_review_Cardreview_ContentCardReview_CardFront {
                contentProjectSummary
                contentReview
                titleService
                titleProjectSummary
                titleProjectInfo
                position
                name
                fieldGroupName
                detailProjectInfo {
                  numberTypeIcon
                  textContent
                }
                avatar {
                  altText
                  sourceUrl
                }
              }
              ... on Card_review_Cardreview_ContentCardReview_CardBack {
                feedbackContent
                feedbackTitle
                linkReadFull {
                  title
                  url
                }
                numberStart
                ratingDetails {
                  fieldGroupName
                  pointRating
                  textRating
                }
                textPointRating
              }
            }
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
export const GetPageService = async (id, languageCode) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPageService($id: Int!, $languageCode: LanguageCodeFilterEnum!) {
      pageBy(pageId: $id) {
        title
        content
        pageService {
          fieldGroupName
          textScroll1
          textScroll2
          titleSectionIntro
          titleSectionListService
        }
      }
      services(
        where: { orderby: { order: ASC, field: DATE }, language: $languageCode }
      ) {
        nodes {
          title
          id
          slug
          serviceHomepage {
            color
          }
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
    return null;
  }
};
export const GetPageAboutUs = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetPageAboutUs($id: Int!) {
      pageBy(pageId: $id) {
        pageAboutUs {
          backgroundImage {
            altText
            sourceUrl
          }
          imageLogo {
            altText
            sourceUrl
          }
          textDescription
          textHeading
          sectionBestDigitalmarketing {
            ... on Page_Pageaboutus_SectionBestDigitalmarketing_ContentSectionBestDigitalmarketing {
              titleSection
              listItem {
                numberTypeIcon
                textContent
                titleItem
              }
            }
          }
          sectionIntroducingOndigitals {
            ... on Page_Pageaboutus_SectionIntroducingOndigitals_IntroducingOndigitals {
              textContent
              imageRight {
                altText
                sourceUrl
              }
              titleSection
            }
          }
          sectionOurTrustedPartner {
            ... on Page_Pageaboutus_SectionOurTrustedPartner_ContentOurTrustedPartner {
              titleSection
              metricList {
                number
                textContent
              }
              listImagePartners {
                altText
                sourceUrl
              }
            }
          }
          sectionStepDigitalMarketing {
            ... on Page_Pageaboutus_SectionStepDigitalMarketing_ContentStepDigitalMarketing {
              titleSection
              listSteps {
                stepsContent
                stepsNumber
                titleSteps
              }
            }
          }
          sectionExploreTheExperience {
            titleSection
            buttonLink {
              url
              title
            }
          }
        }
        translations {
          language {
            slug
            code
          }
          pageId
        }
      }
      allCardReviews(
        first: 9
        where: { orderby: { field: DATE, order: ASC } }
      ) {
        nodes {
          card_reviewId
          cardReview {
            contentCardReview {
              ... on Card_review_Cardreview_ContentCardReview_CardFront {
                contentProjectSummary
                contentReview
                titleService
                titleProjectSummary
                titleProjectInfo
                position
                name
                fieldGroupName
                detailProjectInfo {
                  numberTypeIcon
                  textContent
                }
                avatar {
                  altText
                  sourceUrl
                }
              }
              ... on Card_review_Cardreview_ContentCardReview_CardBack {
                feedbackContent
                feedbackTitle
                linkReadFull {
                  title
                  url
                }
                numberStart
                ratingDetails {
                  pointRating
                  textRating
                }
                textPointRating
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
    return null;
  }
};
