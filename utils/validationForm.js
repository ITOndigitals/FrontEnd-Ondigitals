import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  phone: Yup.string()
    .matches(/^[0-9+\s]+$/, "Only numbers are allowed")
    .min(10, "At least 10 digits")
    .max(15, "At most 15 digits")
  // message: Yup.string()
  //   .min(10, "Minimum 10 characters required")
  //   .required("This field is not empty"),
});
