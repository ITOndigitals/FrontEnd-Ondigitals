import React from "react";
import classes from "./styleForm.module.scss";
import { Maven_Pro } from "next/font/google";
import { IconErrorContact, IconSuccessContact, IconWarningContact } from "../Icons/ListIcon";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function Input({
  title,
  type,
  fieldName,
  placeholder,
  value,
  onChange,
  onBlur,
  errors,
  isSuccess,
}) {
  return (
    <div
      className={`${classes["contact-form-input"]} ${
        errors != null ? "input-contact-form-error" : ""
      } ${isSuccess ? "input-contact-form-success" : ""}`}
    >
      <label htmlFor={fieldName}>{title || "Tell me about yourself(*)"}</label>
      <div style={{ position: "relative" }}>
        <input
          id={fieldName}
          type={type}
          placeholder={placeholder || "Your name / Your company name"}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          style={{ fontFamily: MavenPro.style.fontFamily }}
        />
        {errors && (
          <div className="icon-contact-form">
            <IconErrorContact />
          </div>
        )}
        {isSuccess && (
          <div className="icon-contact-form">
            <IconSuccessContact />
          </div>
        )}
      </div>
      {errors !== null ? (
        <div className="message-errors-contact-form">
          <IconWarningContact />
          <p style={{ fontFamily: MavenPro.style.fontFamily }}>{errors}</p>
        </div>
      ) : null}
    </div>
  );
}
