import React from "react";
import classes from "./CaseStudy.module.scss";
import CaseStudiesFilters from "../CaseStudiesFilters/CaseStudiesFilters";
import CaseStudyList from "./CaseStudyList";

const DUMMY_CASE_STUDIES = [
  {
    id: 1,
    name: "kundal",
    year: 2020,
    image:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1696809600&Signature=EP9ik1ecyFptRUcdTa7XRzPej3lwqz3l4kIDLJDS7K~oGPchKNwKgyeESW6cjEYwKPFVWUeR0H8jTTUEhCIjnsE5eNWMz4j~SI6Rz6e7ya1n7p-23FCfLBtvJkecaZyQeYeKRkj0~pp8c0bJhbJqJiURbbs8PM85454DtTKEfnyw6bEial1VMVw8jL69wc1CmCKcQ~cHx-uCsxvjhtyFelrftS4Aly1I0DHBC6mraWZHzVLhOcV~0u4HPB1e65wrUY04FeplM5r4I-dBe5D8g-inSRfPAlh4~3kHXaYxMPcIWqn9zNOJpP9pP-e5O0V7eEPCsji3CGPoM~EYXsthww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    activeImage:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1696809600&Signature=EP9ik1ecyFptRUcdTa7XRzPej3lwqz3l4kIDLJDS7K~oGPchKNwKgyeESW6cjEYwKPFVWUeR0H8jTTUEhCIjnsE5eNWMz4j~SI6Rz6e7ya1n7p-23FCfLBtvJkecaZyQeYeKRkj0~pp8c0bJhbJqJiURbbs8PM85454DtTKEfnyw6bEial1VMVw8jL69wc1CmCKcQ~cHx-uCsxvjhtyFelrftS4Aly1I0DHBC6mraWZHzVLhOcV~0u4HPB1e65wrUY04FeplM5r4I-dBe5D8g-inSRfPAlh4~3kHXaYxMPcIWqn9zNOJpP9pP-e5O0V7eEPCsji3CGPoM~EYXsthww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 2,
    name: "renault",
    year: 2020,
    image:
      "https://s3-alpha-sig.figma.com/img/ae37/520f/d7dd53b1c29e09ee970ca9005d3b9f9e?Expires=1696809600&Signature=d2EsHvZjaY3dAUpTvYdE8rdrJPmqy6g5VvYeMjBlHo8Z~u8Kgo46ZQt1Q9E6wlr6413sI8an~gxJbtnwmQgeF35ndmfemoZsPcGcV-cUxW3SCdwt1AOH4UvkZFM5FDF1iw9yB1-ug75tJdf40vEHvlzD-ec5vKyIgz9nMO9KOAaa8MSS6ewYUROv~fVN71hss7IyoFZ2ZO6gf-6IBYTvMoKinAAs-ehme8vUbnmjttRfdx49BbEKEAw2FWZEq4ACdaxDIQaU3L5Y-j9EqlWXA0wzUlCxlIjU~c9IWdNnJFlV4-YqF6dpefq~BBt~8JEJ955tDuNjJPY6uiUOunRwaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    activeImage:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1696809600&Signature=EP9ik1ecyFptRUcdTa7XRzPej3lwqz3l4kIDLJDS7K~oGPchKNwKgyeESW6cjEYwKPFVWUeR0H8jTTUEhCIjnsE5eNWMz4j~SI6Rz6e7ya1n7p-23FCfLBtvJkecaZyQeYeKRkj0~pp8c0bJhbJqJiURbbs8PM85454DtTKEfnyw6bEial1VMVw8jL69wc1CmCKcQ~cHx-uCsxvjhtyFelrftS4Aly1I0DHBC6mraWZHzVLhOcV~0u4HPB1e65wrUY04FeplM5r4I-dBe5D8g-inSRfPAlh4~3kHXaYxMPcIWqn9zNOJpP9pP-e5O0V7eEPCsji3CGPoM~EYXsthww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 3,
    name: "kim long diep",
    image:
      "https://s3-alpha-sig.figma.com/img/c3bb/c838/e8b8f46efb39a659d70a636c9c3d4584?Expires=1696809600&Signature=ABtd2stNQQJBq85-jV~hJVk6z0Flje7TUwDoBBH0TByuMN~pFD6Agpt7j2yxJ5Ncx07b~hfXd2C6bKbwbwfe5Xr3i173a3wK2VcSuJ0qwYzgvo7SYn469Qp-FcG3WClpDOqMhCQScIghGUM11wV2nUt1O-cFq6b77otrjbNwh9rmMIV4R5WDPu1m0ACIgx38KMnd98rWSH7dSlyn9gMT3knhjq46~V1iqvID78zJ7DRtVWU3J2GrcZojnkzOK0JeYgA4WU4HCg2Nbupyc366ZnK6vHNRXtOLeW-WMu-hkiNsSfzYI6VY7W-2VpmN6Nt0jTbm-TNWgRDe6g2MySlYeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    activeImage:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1696809600&Signature=EP9ik1ecyFptRUcdTa7XRzPej3lwqz3l4kIDLJDS7K~oGPchKNwKgyeESW6cjEYwKPFVWUeR0H8jTTUEhCIjnsE5eNWMz4j~SI6Rz6e7ya1n7p-23FCfLBtvJkecaZyQeYeKRkj0~pp8c0bJhbJqJiURbbs8PM85454DtTKEfnyw6bEial1VMVw8jL69wc1CmCKcQ~cHx-uCsxvjhtyFelrftS4Aly1I0DHBC6mraWZHzVLhOcV~0u4HPB1e65wrUY04FeplM5r4I-dBe5D8g-inSRfPAlh4~3kHXaYxMPcIWqn9zNOJpP9pP-e5O0V7eEPCsji3CGPoM~EYXsthww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 4,
    name: "ducati",
    image:
      "https://s3-alpha-sig.figma.com/img/ea73/39e1/d0ae8df3725ce6b9ac91e2eebb47760a?Expires=1696809600&Signature=aJe~2FLP7BOJHlOyCleISFkTAoga1syKpWb6fzH3g1zS8jeQ5vB~oYfannTxtLo-NFar41Sy8k39lI~6y8BE5V0KAM6dpNgBQSw7-7OH34FBDxlLaUoN8Tq9SoQ37I8kXFVUBUWOZtvnhIrTK9Sm6c69mIgg7R3TunyQGSNtDUM5KQfo8CWxvS7ds02Speh8kjUkzKfjXAgk9uD8MnuqgW5EK~m9eg5v8uYMaGAuLyRihOUFr~LU16~jG9lPLhH7AIG1FpsLk8ENUeQPUgXYnn3r8FVllmhnrEtLo73ZCY~KGqMDwYk7cRQS86oSzPPz~cPa306eKYpD6lhBjcxpHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    activeImage:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1696809600&Signature=EP9ik1ecyFptRUcdTa7XRzPej3lwqz3l4kIDLJDS7K~oGPchKNwKgyeESW6cjEYwKPFVWUeR0H8jTTUEhCIjnsE5eNWMz4j~SI6Rz6e7ya1n7p-23FCfLBtvJkecaZyQeYeKRkj0~pp8c0bJhbJqJiURbbs8PM85454DtTKEfnyw6bEial1VMVw8jL69wc1CmCKcQ~cHx-uCsxvjhtyFelrftS4Aly1I0DHBC6mraWZHzVLhOcV~0u4HPB1e65wrUY04FeplM5r4I-dBe5D8g-inSRfPAlh4~3kHXaYxMPcIWqn9zNOJpP9pP-e5O0V7eEPCsji3CGPoM~EYXsthww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
  {
    id: 5,
    name: "passion",
    image:
      "https://s3-alpha-sig.figma.com/img/302f/4cbf/7348a358d2fe9c6b872189bb36b7c98a?Expires=1696809600&Signature=T1e2BK4fT3xcz4tdNnE2RYN3g~hweRK5qN-Ewd6A5Ufy8ygQ0dTw1QVYcuBVrzRIg2FyUtMEMcTmdl6mG~uYGmQJSq2XAF619AD6y84IOjLc2FDbCmn-rTGPxoN0jJvfEBY~Kh5dr4WLwqUuFQxQTDy3JcI1gWgswxsMAwa6rx0UZdt-KZOeAxRmxaQwO7pj5NPDEbTYwlOnUiQfvyM6J5xLuvNLP5hsStclPLjqTmc-cENEZ2lmYxpQcLjVpXHoucg1xKrGXMvRvDvdArpH~IgOYGZfsSlLz~XwgUM0PiAfAyVVxa8z6ugMHhxzfJ7mnAbEt9vlQRcVUf~70xbA7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    activeImage:
      "https://s3-alpha-sig.figma.com/img/76c7/d54a/6992bc58548933b5d3e7359e00ed0211?Expires=1696809600&Signature=EP9ik1ecyFptRUcdTa7XRzPej3lwqz3l4kIDLJDS7K~oGPchKNwKgyeESW6cjEYwKPFVWUeR0H8jTTUEhCIjnsE5eNWMz4j~SI6Rz6e7ya1n7p-23FCfLBtvJkecaZyQeYeKRkj0~pp8c0bJhbJqJiURbbs8PM85454DtTKEfnyw6bEial1VMVw8jL69wc1CmCKcQ~cHx-uCsxvjhtyFelrftS4Aly1I0DHBC6mraWZHzVLhOcV~0u4HPB1e65wrUY04FeplM5r4I-dBe5D8g-inSRfPAlh4~3kHXaYxMPcIWqn9zNOJpP9pP-e5O0V7eEPCsji3CGPoM~EYXsthww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    year: 2020,
    tags: [
      {
        name: "Content Marketing",
        type: 1,
      },
      {
        name: "Facebook Ads",
        type: 2,
      },
      {
        name: "Graphic Design",
        type: 3,
      },
      {
        name: "KOL Marketing",
        type: 4,
      },
      {
        name: "Video Marketing",
        type: 2,
      },
    ],
  },
];

export default function CaseStudy() {
  const onSearchHandler = (searchKeyword) => {
    console.log(searchKeyword);
  };
  return (
    <section className={classes["case-study"]}>
      <div className="container">
        <div className={classes["case-study-main"]}>
          <div className={classes["case-study-main-head"]}>
            <p className={classes["case-study-main-head__content"]}>
              Case Study
            </p>
            <div className={classes["case-study-main-head__filter-wrapper"]}>
              <CaseStudiesFilters onSearch={onSearchHandler} color="white" />
            </div>
          </div>
          <div className={classes["case-study-main-content"]}>
            <CaseStudyList items={DUMMY_CASE_STUDIES} />
          </div>
        </div>
      </div>
    </section>
  );
}
