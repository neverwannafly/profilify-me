export const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

export const extractUsername = (url) => {
  const paths = url.split('/');
  if (paths[paths.length - 1] === '') {
    return paths[paths.length - 2];
  }
  return paths[paths.length - 1];
}