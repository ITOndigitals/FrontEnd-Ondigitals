import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  message: Yup.string()
    .min(10, "Minimum 10 characters required")
    .required("This field is not empty"),
});
