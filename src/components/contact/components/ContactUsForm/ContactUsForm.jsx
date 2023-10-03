import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classes from "./ContactUsForm.module.scss";
import MesageTextarea from "@/components/ui/Input/MesageTextarea";
import Input from "@/components/ui/Input/Input";
import { validationSchema } from "../../../../until/validationForm";
import Button from "@/components/ui/Buttons/Button/Button";
import {
  ArrowRight,
  IconDanger,
  IconSuccess,
} from "@/components/ui/Icons/ListIcon";
import Note from "@/components/ui/Note/Note";
import { Maven_Pro } from "next/font/google";
import { SendEmailContactForm } from "@/until/sendEmail";
import { useMutation } from "@apollo/client";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function ContactUsForm() {
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
      console.log(data);
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
            Contact us
          </h1>
          <div
            className={classes["section-contact-form__header__notification"]}
          >
            {loading && (
              <div className="loader-main">
                <div className="loader"></div>
              </div>
            )}
            {isSuccess && (
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
        </div>
        <div className={`${classes["contact-section"]} `}>
          <div className={classes["contact-section__columLeft"]}>
            <form
              className={classes["contact-section__columLeft__form"]}
              onSubmit={formik.handleSubmit}
            >
              <Input
                title={"Tell us about yourself (*)"}
                type={"text"}
                fieldName={"name"}
                placeholder={"Your name / Your company name..."}
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
                title={"Email (*)"}
                type={"email"}
                fieldName={"email"}
                placeholder={"Your email"}
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
                name="message"
                placeholder="Write message..."
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
                    classes[
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
                    {loading ? "Sending message..." : "Send us a message"}
                  </Button>
                </div>
              </div>
              <span style={{ fontFamily: MavenPro.style.fontFamily }}>
                Please read and agree to our Privacy Policy before submitting
                your inquiry. If you wish to opt out or have any concerns,
                kindly contact us directly for assistance.
              </span>
            </form>
          </div>
          <div className={classes["contact-section__columRight"]}>
            <div className={classes["contact-section__columRight__text"]}>
              <p>LET'S TAL</p>
              <p className={classes["talk"]}>K</p>
              <p style={{ fontFamily: MavenPro.style.fontFamily }}>
                Tell us about your business challenge and let's discuss
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
