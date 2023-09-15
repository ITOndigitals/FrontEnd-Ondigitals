import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import classes from "./ContactUsForm.module.scss";
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
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });

export default function ContactUsForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      message: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  function handleSubmit(values) {
    console.log(values);
    formik.resetForm();
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
                    Send us a message
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
