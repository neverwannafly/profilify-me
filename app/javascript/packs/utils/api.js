export const dispatchNetworkError = () => ({ success: false, error: 'Network Error' });

export const parseJsonResponse = async (data) => {
  const response = await data.json();
  return response;
};

export const request = async (method, url, body = null) => {
  let payload = {
    method,
    headers: {'Content-Type': 'application/json'},
  }
  if (method !== 'GET') {
    payload = {...payload, body: JSON.stringify(body) };
  }
  const data = await fetch(url, payload);
  return parseJsonResponse(data);
};