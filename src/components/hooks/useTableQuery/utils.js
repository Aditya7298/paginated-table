export const serializeUrlParams = (baseUrl, params) => {
  const serializedParams = Object.keys(params).reduce((acc, key) => {
    return `${acc}&${key}=${encodeURIComponent(params[key])}`;
  }, "");

  return `${baseUrl}?${serializedParams}`;
};

const getSortedSerializedParams = (params) => {
  const paramsKeys = Object.keys(params);
  return paramsKeys
    .sort((keyA, keyB) => (keyA < keyB ? 1 : 0))
    .reduce((acc, key) => {
      return `${acc}&${key}=${encodeURIComponent(params[key])}`;
    }, "");
};

export const createCacheKey = (baseUrl, params) => {
  return `__cache__key__${baseUrl}__${getSortedSerializedParams(params)}`;
};
