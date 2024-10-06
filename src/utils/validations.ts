import { type TErrorMessage } from "utils/translations/types";

const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex: RegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateLoginForm = (email: string, password: string): TErrorMessage => {
  if (!email) {
    return "emptyEmail";
  }

  const isEmailValid: boolean = emailRegex.test(email);

  if (!isEmailValid) {
    return "invalidEmail";
  }

  if (!password) {
    return "emptyPassword";
  }

  return "";
};

export const validateSignupForm = (name: string, email: string, password: string, confirmPassword: string): TErrorMessage => {
  if (!email) {
    return "emptyEmail";
  }

  if (!password) {
    return "emptyPassword";
  }

  const isEmailValid: boolean = emailRegex.test(email);
  const isPasswordValid: boolean = passwordRegex.test(password);

  if (!name) {
    return "fullNameRequired";
  }
  if (!isEmailValid) {
    return "invalidEmail";
  }
  if (!isPasswordValid) {
    return "invalidPassword";
  }
  if (password !== confirmPassword) {
    return "passwordMismatch";
  }

  return "";
};
