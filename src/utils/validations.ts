const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex: RegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const validateLoginForm = (email: string): string | null => {
  const isEmailValid: boolean = emailRegex.test(email);

  if (!isEmailValid) {
    return "invalidEmail";
  }

  return null;
};

export const validateSignupForm = (name: string, email: string, password: string, confirmPassword: string): string | null => {
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

  return null;
};
