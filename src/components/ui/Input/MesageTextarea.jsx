import React from "react";
import classes from "./styleForm.module.scss";
import { Maven_Pro } from "next/font/google";
import { IconErrorContact, IconSuccessContact, IconWarningContact } from "../Icons/ListIcon";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function MesageTextarea({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  errors,
  isSuccess,
  title,
}) {
  return (
    <>
      <div
        className={`${classes["contact-form-textarea"]} ${
          errors != null ? "textare-contact-form-error" : ""
        } ${isSuccess ? "textare-contact-form-success" : ""}`}
      >
        <div style={{ position: "relative" }}>
          <label htmlFor={name}>{title || "Message"}</label>
          <textarea
            id={name}
            name={name}
            placeholder={placeholder || "Write message..."}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            style={{ fontFamily: MavenPro.style.fontFamily }}
          />
          {errors && (
            <div className="icon-contact-form-textarea">
              <IconErrorContact />
            </div>
          )}
          {isSuccess && (
            <div className="icon-contact-form-textarea">
              <IconSuccessContact />
            </div>
          )}
        </div>
      </div>
      {errors !== null ? (
        <div className="message-errors-contact-form">
          <IconWarningContact />
          <p style={{ fontFamily: MavenPro.style.fontFamily }}> {errors}</p>
        </div>
      ) : null}
    </>
  );
}
