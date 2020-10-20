export const request = async (method, url, namespace, body = null) => {
  return fetch(url, {
    method,
    body: serializeQuery(body, namespace),
  });
};

export const serializeQuery = (params, namespace) => {
  if(params === null) return null;

  const query = Object.keys(params).map((key) => {
    const value  = params[key];

    if (params.constructor === Array) {
      key = `${namespace}[]`;
    }
    else if (params.constructor === Object) {
      key = (namespace ? `${namespace}[${key}]` : key);
    }

    if (typeof value === 'object') {
      return serializeQuery(value, key);
    }
    else {
      return `${key}=${encodeURIComponent(value)}`;
    }
  });

  return [].concat.apply([], query).join('&');
}