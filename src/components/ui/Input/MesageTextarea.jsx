import React from "react";
import classes from "./styleForm.module.scss"
import { Maven_Pro } from "next/font/google";
const MavenPro = Maven_Pro({ subsets: ["latin", "vietnamese"] });
export default function MesageTextarea({
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  errors,
  isSuccess,
}) {
  return (
    <>
      <div
        className={`${classes["contact-form-textarea"]} ${
          errors != null ? "textare-contact-form-error" : ""
        } ${isSuccess ? "textare-contact-form-success" : ""}`}
      >
        <div style={{ position: "relative" }}>
          <label htmlFor={name}>Message</label>
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            style={{ fontFamily: MavenPro.style.fontFamily }}
          />
          {errors && (
            <div className="icon-contact-form-textarea">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#FF5252"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9L9 15"
                  stroke="#FF5252"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 9L15 15"
                  stroke="#FF5252"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          {isSuccess && (
            <div className="icon-contact-form-textarea">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                  stroke="#5CFFAE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="#5CFFAE"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      {errors !== null ? (
        <div className="message-errors-contact-form">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_2868_3147)">
              <path
                d="M8.00016 14.6673C11.6821 14.6673 14.6668 11.6825 14.6668 8.00065C14.6668 4.31875 11.6821 1.33398 8.00016 1.33398C4.31826 1.33398 1.3335 4.31875 1.3335 8.00065C1.3335 11.6825 4.31826 14.6673 8.00016 14.6673Z"
                stroke="#FF5252"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 5.33398V8.00065"
                stroke="#FF5252"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.666H8.00667"
                stroke="#FF5252"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2868_3147">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p style={{ fontFamily: MavenPro.style.fontFamily }}> {errors}</p>
        </div>
      ) : null}
    </>
  );
}
