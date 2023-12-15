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
        seo {
          fullHead
        }
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

export const GetListSlugPosts = async (language) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugPosts($language: LanguageCodeFilterEnum!) {
      posts(
        where: { language: $language, orderby: { field: DATE, order: DESC } }
        first: 100
      ) {
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
  const variables = { language };
  try {
    const data = await request(endpoint, query, variables);
    return data.posts.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
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
          seo {
            fullHead
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
            partnerSectionListImage {
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
            contentLabelForm {
              textLable
              textPlaceholder
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
      services(
        where: { orderby: { order: ASC, field: DATE }, language: $languageCode }
        first: 4
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
      allCaseStudy(where: { orderby: { field: DATE, order: DESC } }) {
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
        seo {
          fullHead
        }
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
          titleHeadingSectionFaq
          sectionWho {
            backgroundColor
            color
            projectCardShort {
              listImageLogo {
                altText
                sourceUrl
              }
              mainImage {
                altText
                sourceUrl
              }
              textContent
            }
            textLeftHead
            textRightHead
          }
          sectionWhat {
            backgroundColor
            contentLeft
            contentRight
            textTitle
            mainImage {
              altText
              sourceUrl
            }
          }
          sectionWhy {
            backgroundColor
            color
            listCardWhy {
              cardContent
              cardTitle
              mainImage {
                altText
                sourceUrl
              }
            }
            textLeftHead
            textRightHead
          }
          sectionHow {
            cardStep {
              cardContent
              cardTitle
              titleStep
              iconCardStep
            }
            contentListSteps
            contentPlatform {
              contentTitle
              iconImage {
                altText
                sourceUrl
              }
              platformGlobal {
                content
                listIconImage {
                  altText
                  sourceUrl
                }
                name
              }
              platformVietnam {
                content
                fieldGroupName
                listSocialMedia {
                  sourceUrl
                  altText
                }
                name
              }
              textFooterPlatform
              title
            }
            textLeftHead
            textRightHead
            titleListSteps
            imageIcon {
              altText
              sourceUrl
            }
          }
          sectionWhich {
            backgroundColor
            textHeadingRight
            textHeadingLeft
            layoutContentSectionWhich {
              ... on Service_Servicehomepage_SectionWhich_LayoutContentSectionWhich_LayoutCard {
                textContent
                title
                imageCard {
                  altText
                  sourceUrl
                }
              }
              ... on Service_Servicehomepage_SectionWhich_LayoutContentSectionWhich_LayoutVideo {
                content
                title
                urlVideo
                videoDescription
              }
            }
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
              color
              textLeft
              textRight
              textHeadTitle
              textTitle
              backgroundColorImage
              imageSectionIntro {
                altText
                sourceUrl
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
          textScroll1
          textScroll2
          titleSectionIntro
          titleSectionListService
          sectionCaseStudy {
            textBelowButton
            textButton
            title
          }
          sectionListServices {
            textButtonLink
            title
          }
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
              textFooterSection
              listItem {
                imageIcon {
                  altText
                  sourceUrl
                }
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
export const GetSeoBlogPage = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetSeoBlogPage($id: Int!) {
      pages(where: { id: $id }) {
        nodes {
          seo {
            fullHead
          }
          translations {
            pageId
            language {
              code
              name
            }
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
export const GetDataPageContact = async (id) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetDataPageContact($id: Int!) {
      pageBy(pageId: $id) {
        seo {
          fullHead
        }
        pageContact {
          contactForm {
            contentForm {
              textLable
              textPlaceholder
            }
          }
          sectionMap {
            contentInfo {
              textContent
              title
            }
          }
          textButton
          textButtonSending
          textColumLeft
          title
          titleColumLeft
          contentNoteError
          contentNoteSuccess
          contentPrivacyPolicy
        }
        translations {
          language {
            code
            name
          }
          pageId
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
export const GetListSlugServiceParent = async () => {
  const endpoint = endPointApi;
  const query = gql`
    query GetListSlugServiceParent {
      serviceParents {
        nodes {
          slug
          service_parentId
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
    return data.serviceParents.nodes;
  } catch (error) {
    console.error("Error fetching data", error);
    return [];
  }
};
export const GetServiceParentDetailBySlug = async (slug) => {
  const endpoint = endPointApi;
  const query = gql`
    query GetServiceParentDetailBySlug($slug: String!) {
      serviceParentBy(slug: $slug) {
        content
        title
        seo {
          fullHead
        }
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
          titleHeadingSectionFaq
          sectionWho {
            backgroundColor
            color
            projectCardShort {
              listImageLogo {
                altText
                sourceUrl
              }
              mainImage {
                altText
                sourceUrl
              }
              textContent
            }
            textLeftHead
            textRightHead
          }
          sectionWhat {
            backgroundColor
            contentLeft
            contentRight
            textTitle
            mainImage {
              altText
              sourceUrl
            }
          }
          sectionWhy {
            backgroundColor
            color
            listCardWhy {
              cardContent
              cardTitle
              mainImage {
                altText
                sourceUrl
              }
            }
            textLeftHead
            textRightHead
          }
          sectionHow {
            cardStep {
              cardContent
              cardTitle
              titleStep
              iconCardStep
            }
            contentListSteps
            contentPlatform {
              contentTitle
              iconImage {
                altText
                sourceUrl
              }
              platformGlobal {
                content
                listIconImage {
                  altText
                  sourceUrl
                }
                name
              }
              platformVietnam {
                content
                fieldGroupName
                listSocialMedia {
                  sourceUrl
                  altText
                }
                name
              }
              textFooterPlatform
              title
            }
            textLeftHead
            textRightHead
            titleListSteps
            imageIcon {
              altText
              sourceUrl
            }
          }
          sectionWhich {
            backgroundColor
            textHeadingRight
            textHeadingLeft
            layoutContentSectionWhich {
              ... on Service_parent_Servicehomepage_SectionWhich_LayoutContentSectionWhich_LayoutCard {
                textContent
                title
                imageCard {
                  altText
                  sourceUrl
                }
              }
              ... on Service_parent_Servicehomepage_SectionWhich_LayoutContentSectionWhich_LayoutVideo {
                content
                title
                urlVideo
                videoDescription
              }
            }
          }
          sectionContentDetail {
            ... on Service_parent_Servicehomepage_SectionContentDetail_ContentNoImage {
              content
              title
            }
            ... on Service_parent_Servicehomepage_SectionContentDetail_ContentWithImage {
              content
              image {
                altText
                sourceUrl
              }
              title
            }
          }
          layoutContentServiceDetail {
            ... on Service_parent_Servicehomepage_LayoutContentServiceDetail_SectionIntro {
              backgroundColor
              color
              textLeft
              textRight
              textHeadTitle
              textTitle
              backgroundColorImage
              imageSectionIntro {
                altText
                sourceUrl
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