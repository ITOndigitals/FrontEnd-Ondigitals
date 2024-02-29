import React, { useEffect, useState } from "react";
import classes from "./PopupForm.module.scss";
import getValidationSchema from "../../../../utils/validationForm";
import { Field, useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { SendEmailContactForm } from "../../../../utils/sendEmail";
import Input from "../Input/Input";
import {
  ArrowRight,
  CancelIcon,
  IconDanger,
  IconSuccess,
} from "../Icons/ListIcon";
import Button from "../Buttons/Button/Button";
import Note from "../Note/Note";
import { useRouter } from "next/router";

const parse = require("html-react-parser");

export default function PopupForm({ dataForm, isOpen, onClose }) {
  const { locale } = useRouter();
  const {
    titleForm,
    textCheckbox,
    textButton,
    contentBelowButton,
    textInput,
    contentNoteError,
    contentNoteSuccess,
  } = dataForm?.contentFormRequest;
  const [fieldName, fieldEmail, fieldPhone] = textInput || [];

  const [sendEmailMutation, { loading, error }] =
    useMutation(SendEmailContactForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      checked: false,
    },
    validationSchema: getValidationSchema(locale),
    onSubmit: handleSubmit,
  });
  async function handleSubmit(values) {
    try {
      const { data } = await sendEmailMutation({
        variables: {
          body: `<h4 style="color: black;">Companyname or Name Client: <p style="font-weight: 300;display: inline;">${
            values.name
          }</p></h4> 
          <h4 style="color: black;">Email: <p style="font-weight: 300;display: inline;">${
            values.email
          }</p></h4>  
          <h4 style="color: black;">Digitals Credential: <span style="font-weight: 300;">${
            values.checked
              ? "I would like to receive On Digitals Credential"
              : "I do not want to receive On Digitals Credential"
          }</span></h4>  
          <h4 style="color: black;">
            Phone Number: 
            <a href="tel:${
              values.phone
            }" style="color: #1155CC;display:inline;font-weight: 300;">
              ${values.phone}
            </a>
          </h4> `,
          subject: "Request Credential",
        },
      });
      formik.resetForm();
      setIsSuccess(true);
    } catch (mutationError) {
      console.error(mutationError);
    }
  }
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    if (isSuccess) {
      const timeout = setTimeout(onClose, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isSuccess, onClose]);

  return (
    <div className={classes["popup-form"]}>
      <div onClick={onClose} className={classes["popup-form__overlay"]}>
        <div
          onClick={handleContentClick}
          style={{ display: isSuccess ? "none" : "unset" }}
          className={`${classes["popup-form__overlay__content"]} ${
            isOpen && classes["popup-form__overlay__content__open"]
          }`}
        >
          <div className={classes["popup-form__overlay__title"]}>
            <p className={classes["popup-form__overlay__title__text"]}>
              {titleForm && titleForm}
            </p>
            <button
              className={classes["popup-form__overlay__title__btn"]}
              onClick={onClose}
            >
              <CancelIcon width={24} height={24} color="#111111" />
            </button>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <Input
              title={fieldName.textLable}
              type={"text"}
              fieldName={"name"}
              placeholder={fieldName.textPlaceholder}
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
              title={fieldEmail.textLable}
              type={"email"}
              fieldName={"email"}
              placeholder={fieldEmail.textPlaceholder}
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
              title={fieldPhone.textLable}
              type={"tel"}
              fieldName={"phone"}
              placeholder={fieldPhone.textPlaceholder}
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
            <div className={classes["popup-form__overlay__content__checked"]}>
              <input
                type="checkbox"
                id="checked"
                checked={formik.values.checked}
                onChange={formik.handleChange}
              />
              <label htmlFor="checked">{textCheckbox && textCheckbox}</label>
            </div>
            <div
              className={`${classes["popup-form__overlay__footer"]} ${
                loading ? classes["popup-form__overlay__footer__loading"] : ""
              }`}
            >
              <Button
                RightIcon={<ArrowRight width={24} height={24} color="#FFF" />}
              >
                {loading ? `${textButton}...` : textButton}
              </Button>
              <div className={classes["popup-form__overlay__footer__text"]}>
                {contentBelowButton && parse(contentBelowButton)}
              </div>
            </div>
          </form>
        </div>
        <div className={isSuccess ? classes["popup-form__note"] : ""}>
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
    </div>
  );
}
