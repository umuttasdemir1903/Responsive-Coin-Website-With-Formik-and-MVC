import * as yup from "yup";

// 1 küçük harf
// 1 büyük harf
// 1 sayı
// 1 özel karakter
// minimum 5 karakter

const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+{}:;<>,.?])(.{5,})$";

export const schema = yup.object().shape({
  // email için zorunluluklar
  email: yup
    .string()
    .email("Please enter a valid email !")
    .required("Email field is mandatory !"),
  // yaş için zorunluluklar
  age: yup
    .number()
    .min(18, "Age must be over 18 !")
    .max(90, "Age can not be older than 90 !")
    .integer("Please enter an integer !"),

  password: yup
    .string()
    .min(5, "Password must be more than 5  characters !")
    .matches(regex, "Password weak")
    .required("password field mandatory !"),

  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Your confirmation password is not correct")
    .required('Please confirm your password !')
});
