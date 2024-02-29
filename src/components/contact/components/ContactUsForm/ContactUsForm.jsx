import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classes from "./ContactUsForm.module.scss";
import MesageTextarea from "@/components/ui/Input/MesageTextarea";
import Input from "@/components/ui/Input/Input";
import getValidationSchema from "../../../../../utils/validationForm";
import Button from "@/components/ui/Buttons/Button/Button";
import {
  ArrowRight,
  IconDanger,
  IconSuccess,
} from "@/components/ui/Icons/ListIcon";
import Note from "@/components/ui/Note/Note";
import { Maven_Pro } from "next/font/google";
import { useMutation } from "@apollo/client";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { SendEmailContactForm } from "../../../../../utils/sendEmail";
import { useRouter } from "next/router";

const parse = require("html-react-parser");
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function ContactUsForm({ data }) {
  const { locale } = useRouter();
  const {
    textButton,
    textButtonSending,
    textColumLeft,
    title,
    titleColumLeft,
    contentPrivacyPolicy,
    contentNoteError,
    contentNoteSuccess,
    contactForm,
  } = data;
  const [fieldName, fieldEmail, fieldPhone, fieldMessage] =
    contactForm.contentForm || [];
  const [sendEmailMutation, { loading, error }] =
    useMutation(SendEmailContactForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
      phone: "",
    },
    validationSchema: getValidationSchema(locale),
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    try {
      const { data } = await sendEmailMutation({
        variables: {
          body: `<h4 style="color: black;">Companyname or Name Client: <p style="font-weight: 300; display: inline;">${values.name}</p></h4> 
          <h4 style="color: black;">Email: <p style="font-weight: 300; display: inline;">${values.email}</p></h4>  
          <h4 style="color: black;">
            Phone Number: 
            <a href="tel:${values.phone}" style="color: #1155CC; display: inline;">
              <p style="font-weight: 300; display: inline;">${values.phone}</p>
            </a>
          </h4>
          <strong style="color: black;">Message: <p style="font-weight: 300; display: inline;">${values.message}</p></strong>`,
          subject: "Notification of contact person",
        },
      });
      formik.resetForm();
      setIsSuccess(true);
    } catch (mutationError) {
      console.error(mutationError);
    }
  }

  return (
    <section className={classes["section-contact-form"]}>
      <div className="container">
        <div className={classes["section-contact-form__header"]}>
          <h1 className={classes["section-contact-form__header__title"]}>
            {title && title}
          </h1>
          <div
            className={classes["section-contact-form__header__notification"]}
          >
            {loading && <LoadingSpinner />}
            {isSuccess && !loading && (
              <Note
                content={contentNoteSuccess}
                backgroundColor="#5CFFAE"
                icon={
                  <IconSuccess
                    width={24}
                    height={24}
                    color="rgba(19, 17, 20, 1)"
                  />
                }
              />
            )}
            {error && (
              <Note
                content={contentNoteError}
                backgroundColor="rgba(255, 82, 82, 1)"
                icon={
                  <IconDanger
                    width={24}
                    height={24}
                    color="rgba(19, 17, 20, 1)"
                  />
                }
              />
            )}
          </div>
        </div>
        <div className={`${classes["contact-section"]} `}>
          <div className={classes["contact-section__columLeft"]}>
            <form
              className={classes["contact-section__columLeft__form"]}
              onSubmit={formik.handleSubmit}
            >
              <Input
                title={fieldName?.textLable}
                type={"text"}
                fieldName={"name"}
                placeholder={fieldName?.textPlaceholder}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : null
                }
                isSuccess={
                  formik.touched.name && !formik.errors.name ? true : false
                }
              />
              <Input
                title={fieldEmail?.textLable}
                type={"email"}
                fieldName={"email"}
                placeholder={fieldEmail?.textPlaceholder}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                isSuccess={
                  formik.touched.email && !formik.errors.email ? true : false
                }
              />
              <Input
                title={fieldPhone?.textLable}
                type={"tel"}
                fieldName={"phone"}
                placeholder={fieldPhone?.textPlaceholder}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={
                  formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : null
                }
                isSuccess={
                  formik.touched.phone && !formik.errors.phone ? true : false
                }
              />
              <MesageTextarea
                title={fieldMessage?.textLable}
                name="message"
                placeholder={fieldMessage?.textPlaceholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                errors={
                  formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : null
                }
                isSuccess={
                  formik.touched.message && !formik.errors.message
                    ? true
                    : false
                }
              />
              <div
                className={
                  classes["contact-section__columLeft__form__buttonAndNote"]
                }
              >
                <div
                  className={
                    loading
                      ? classes[
                          "contact-section__columLeft__form__buttonAndNote--btn__loading"
                        ]
                      : classes[
                          "contact-section__columLeft__form__buttonAndNote--btn"
                        ]
                  }
                >
                  <Button
                    className="btn-contact-form"
                    RightIcon={
                      <ArrowRight width={24} height={24} color="#FFF" />
                    }
                  >
                    {loading ? textButtonSending : textButton}
                  </Button>
                </div>
              </div>
              <div
                className={classes["content-privacy-policy"]}
                style={{ fontFamily: MavenPro.style.fontFamily }}
              >
                {contentPrivacyPolicy && parse(contentPrivacyPolicy)}
              </div>
            </form>
          </div>
          <div className={classes["contact-section__columRight"]}>
            <div className={classes["contact-section__columRight__text"]}>
              <p>{titleColumLeft && titleColumLeft}</p>
              <p style={{ fontFamily: MavenPro.style.fontFamily }}>
                {textColumLeft && textColumLeft}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
