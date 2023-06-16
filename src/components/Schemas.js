import * as Yup from "yup";

export const baseURL = "https://api.autopi.io";

export const dongleID = "d551fc2e-7a6c-4ebf-954b-29d3e6ae5bc4";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password Required.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});
