import * as Yup from "yup";

const messages = {
  en: {
    string: {
      max: "Must be less than 100 characters",
      email: "Invalid email address",
      required: "This field is required",
      matches: "Only numbers are allowed",
      min: "At least 10 digits",
      max: "At most 15 digits",
    },
  },
  vi: {
    string: {
      max: "Phải ít hơn 100 ký tự",
      email: "Địa chỉ email không hợp lệ",
      required: "Trường này là bắt buộc",
      matches: "Chỉ cho phép nhập số",
      min: "Ít nhất 10 chữ số",
      max: "Tối đa 15 chữ số",
    },
  },
};

const getValidationSchema = (language) => {
  const selectedLanguage = messages[language] || messages.en; // Sử dụng ngôn ngữ mặc định nếu không có ngôn ngữ được chỉ định

  Yup.setLocale(selectedLanguage);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(100, selectedLanguage.string.max)
      .required(selectedLanguage.string.required),
    email: Yup.string()
      .email(selectedLanguage.string.email)
      .required(selectedLanguage.string.required),
    // phone: Yup.string()
    //   .matches(/^[0-9+\s]+$/, selectedLanguage.string.matches)
    //   .min(10, selectedLanguage.string.min)
    //   .max(15, selectedLanguage.string.max),
    // message: Yup.string()
    //   .min(10, "Minimum 10 characters required")
    //   .required("This field is not empty"),
  });

  return validationSchema;
};

export default getValidationSchema;
