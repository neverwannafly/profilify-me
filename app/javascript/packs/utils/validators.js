export const isUsernameValid = (username) => {
  const usernameRegExp = /^[a-zA-Z]+[\w\d_-]*$/;
  return usernameRegExp.test(username);
};

export const isEmailValid = (email) => {
  const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  return emailRegExp.test(email.toLowerCase());
}

export const doPasswordsMatch = (pass1, pass2) => pass1 === pass2;