const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


export const validateLoginForm = (email) => {
  const isEmailValid = emailRegex.test(email);

  if (!isEmailValid) {
    return 'Email format is invalid';
  }

  return null;
};

export const validateSignupForm = (name, email, password, confirmPassword) => {
  const isEmailValid = emailRegex.test(email);

  const isPasswordValid = passwordRegex.test(password);

  if (!name) {
    return 'Full name is required';
  }
  if (!isEmailValid) {
    return 'Email format is invalid';
  }
  if (!isPasswordValid) {
    return 'Password must contain at least 8 characters, one letter, one number and one special character';
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }

  return null;
};