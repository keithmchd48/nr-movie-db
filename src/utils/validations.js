const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const validateLoginForm = (email) => {
  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) {
    return 'invalidEmail';
  }

  return null;
};

export const validateSignupForm = (name, email, password, confirmPassword) => {
  const isEmailValid = emailRegex.test(email);

  const isPasswordValid = passwordRegex.test(password);

  if (!name) {
    return 'fullNameRequired';
  }
  if (!isEmailValid) {
    return 'invalidEmail';
  }
  if (!isPasswordValid) {
    return 'invalidPassword';
  }
  if (password !== confirmPassword) {
    return 'passwordMismatch';
  }

  return null;
};