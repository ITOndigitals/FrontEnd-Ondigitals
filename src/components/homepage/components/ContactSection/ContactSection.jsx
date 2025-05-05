import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classes from "./ContactSection.module.scss";
import MesageTextarea from "@/components/ui/Input/MesageTextarea";
import Input from "@/components/ui/Input/Input";
import getValidationSchema from "../../../../../utils/validationForm";
import Image from "next/image";
import Button from "@/components/ui/Buttons/Button/Button";
import {
  ArrowRight,
  IconDanger,
  IconSuccess,
} from "@/components/ui/Icons/ListIcon";
import Note from "@/components/ui/Note/Note";
import { Maven_Pro } from "next/font/google";
import { useMutation } from "@apollo/client";
import { SendEmailContactForm } from "../../../../../utils/sendEmail";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const ContactSection = React.forwardRef((props, ref) => {
  const { NavButton, data } = props;
  const { locale } = useRouter();
  const [isOnMobile, setIsOnMobile] = useState(false);
  const {
    contactFormTitle,
    contactFormDecs,
    contactFormTextButton,
    contactFormTextRequiredField,
    contentNoteError,
    contentNoteSuccess,
    textEmailContact,
    linkPrivacyPolicy,
    contentLabelForm,
    imageSectionContact,
  } = data.pages.nodes[0].homePageInputContent;
  const [fieldName, fieldEmail, fieldPhone, fieldMessage] =
    contentLabelForm || [];
  useEffect(() => {
    const handleResize = () => {
      setIsOnMobile(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [sendEmailMutation, { loading, error }] =
    useMutation(SendEmailContactForm);
  const [isSuccess, setIsSuccess] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
      honeypot: "", // Trường honeypot ẩn
    },
    validationSchema: getValidationSchema(locale),
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    try {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      const token = await executeRecaptcha("submitAction");

      // Gửi token đến server để xác thực
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, honeypot: values.honeypot }),
      });
      const dataRecapcha = await response.json();
      if (dataRecapcha.success) {
        console.log("reCAPTCHA verified successfully");
        // Thực hiện hành động sau khi xác thực thành công
        const { data } = await sendEmailMutation({
          variables: {
            body: `<h4 style="color: black;">Companyname or Name Client: <p style="font-weight: 300; display: inline;">${values.name}</p></h4> 
              <h4 style="color: black;">Email: <p style="font-weight: 300; display: inline;">${values.email}</p></h4>  
              <strong style="color: black;">Message:</strong> 
              <pre style="font-weight: 400;display: inline;white-space: pre-wrap;line-height: 24px;font-family: 'Roboto';font-size: 16px;">${values.message}</pre>
            `,
            subject: "Hello from On Digitals!",
          },
        });
        formik.resetForm();
        setIsSuccess(true);
      } else {
        console.log("reCAPTCHA verification failed");
        // Xử lý khi xác thực thất bại
      }
    } catch (mutationError) {
      console.error(mutationError);
    }
  }

  return (
    <section className={classes["section-contact-form"]} ref={ref}>
      <div className={`${classes["contact-section"]} container`}>
        <div className={classes["contact-section__columLeft"]}>
          <form
            className={classes["contact-section__columLeft__form"]}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
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
            {/* <Input
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
            /> */}
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
                formik.touched.message && !formik.errors.message ? true : false
              }
            />
            <input
              type="text"
              name="honeypot"
              style={{ display: "none" }}
              onChange={formik.handleChange}
              value={formik.values.honeypot}
            />

            <div
              className={
                classes["contact-section__columLeft__form__buttonAndNote"]
              }
            >
              <div
                className={
                  classes[
                    "contact-section__columLeft__form__buttonAndNote--detail"
                  ]
                }
              >
                {loading && <LoadingSpinner />}
                {isSuccess && !loading && (
                  <Note
                    content={contentNoteSuccess && contentNoteSuccess}
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
                    content={contentNoteError && contentNoteError}
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
              <div
                className={
                  classes[
                    "contact-section__columLeft__form__buttonAndNote--btn"
                  ]
                }
              >
                <Button
                  className="btn-contact-form"
                  RightIcon={<ArrowRight width={24} height={24} color="#FFF" />}
                >
                  {loading
                    ? `${contactFormTextButton} ...`
                    : `${contactFormTextButton}`}
                </Button>
              </div>
            </div>
            <span
              className={
                classes[
                  "contact-section__columLeft__form__buttonAndNote--btn__textpolicy"
                ]
              }
              style={{ fontFamily: MavenPro.style.fontFamily }}
            >
              {`${contactFormTextRequiredField} `}
              {linkPrivacyPolicy ? (
                <Link href={linkPrivacyPolicy.url}>
                  {linkPrivacyPolicy.title}
                </Link>
              ) : null}
            </span>
          </form>
        
        </div>
        <div className={classes["contact-section__columRight"]}>
          <div className={classes["contact-section__columRight__image"]}>
            <Image
              src={imageSectionContact?.sourceUrl}
              fill
              alt="intro-img"
              placeholder="blur"
              blurDataURL={imageSectionContact?.sourceUrl}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
          <div className={classes["contact-section__columRight__text"]}>
            <p>{contactFormTitle}</p>
            <p>{contactFormDecs}</p>
          </div>
        </div>
      </div>
      {!isOnMobile && NavButton && NavButton}
    </section>
  );
});

export default ContactSection;
