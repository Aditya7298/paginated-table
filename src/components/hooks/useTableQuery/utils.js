export const serializeUrlParams = (baseUrl, params) => {
  const serializedParams = Object.keys(params).reduce((acc, key) => {
    return `${acc}&${key}=${params[key]}`;
  }, "");

  return `${baseUrl}?${serializedParams}`;
};
