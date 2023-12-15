import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classes from "./ContactSection.module.scss";
import MesageTextarea from "@/components/ui/Input/MesageTextarea";
import Input from "@/components/ui/Input/Input";
import { validationSchema } from "../../../../until/validationForm";
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
import { SendEmailContactForm } from "@/until/sendEmail";
import LoadingSpinner from "@/components/ui/LoadingSpinner/LoadingSpinner";
import Link from "next/link";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

const ContactSection = React.forwardRef((props, ref) => {
  const { NavButton, data } = props;
  const [isOnMobile, setIsOnMobile] = useState(false);
  const {
    contactFormTitle,
    contactFormDecs,
    contactFormTextButton,
    contactFormTextRequiredField,
    linkPrivacyPolicy,
    contentLabelForm,
  } = data.pages.nodes[0].homePageInputContent;
  const [fieldName, fieldEmail, fieldMessage] = contentLabelForm || [];
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
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  async function handleSubmit(values) {
    try {
      const { data } = await sendEmailMutation({
        variables: {
          body: `<h4 style="color: black;">Companyname or Name Client: ${values.name}</h4> <h4 style="color: black;">Email: ${values.email}</h4>  <strong style="color: black;">Message: ${values.message}</strong>  `,
          subject: "Thông báo có khách hàng mới",
        },
      });
      formik.resetForm();
      setIsSuccess(true);
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
                    content="Message sent! 
             Thank you for contacting us.
             We will reach out to you soon."
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
                    content="Something went wrong! 
                We couldn't receive your message.
                Please wait and try again."
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
                <span style={{ fontFamily: MavenPro.style.fontFamily }}>
                  {`${contactFormTextRequiredField} `}
                  {linkPrivacyPolicy ? (
                    <Link href={linkPrivacyPolicy.url}>
                      {linkPrivacyPolicy.title}
                    </Link>
                  ) : null}
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className={classes["contact-section__columRight"]}>
          <div className={classes["contact-section__columRight__image"]}>
            <Image
              src="/assets/images/partials/intro-bg.png"
              fill
              alt="intro-img"
              placeholder="blur"
              blurDataURL={"/assets/images/partials/intro-bg.png"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
