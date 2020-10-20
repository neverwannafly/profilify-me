export const dispatchNetworkError = () => ({ success: false, error: 'Network Error' });

export const parseJsonResponse = async (data) => {
  const response = await data.json();
  return response;
};

export const request = async (method, url, namespace, body = null) => {
  const data = await fetch(url, {
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ [namespace]:  body }),
  });
  return parseJsonResponse(data);
};