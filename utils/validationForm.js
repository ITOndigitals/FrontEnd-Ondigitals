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
      minString: "Must be more than 10 characters",
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
      minString: "Phải có ít nhất 10 chữ cái",
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
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        selectedLanguage.string.email
      )
      .required(selectedLanguage.string.required),
    // phone: Yup.string()
    //   .matches(/^[0-9+\s]+$/, selectedLanguage.string.matches)
    //   .min(10, selectedLanguage.string.min)
    //   .max(15, selectedLanguage.string.max),
    message: Yup.string()
      .min(10, selectedLanguage.string.minString)
      .required(selectedLanguage.string.required),
  });

  return validationSchema;
};

export default getValidationSchema;
