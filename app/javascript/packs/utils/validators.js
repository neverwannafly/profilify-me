export const isUsernameValid = (username) => {
  if (username === '') return true;
  const usernameRegExp = /^[a-zA-Z]+[\w\d_-]*$/;
  return usernameRegExp.test(username);
};

export const isEmailValid = (email) => {
  if (email === '') return true;
  const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return emailRegExp.test(email.toLowerCase());
}

export const doPasswordsMatch = (pass1, pass2) => {
  if (pass1 === '' || pass2 === '') return true;
  return pass1 === pass2;
}

export const isStringValid = (string) => {
  const stringRegExp = /^\w*$/;
  return stringRegExp.test(string);
};

export const sanitizeString = (string) => {
  return string.toLowerCase().trim();
}