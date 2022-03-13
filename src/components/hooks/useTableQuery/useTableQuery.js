import { useEffect, useMemo, useState } from "react";
import { serializeUrlParams, createCacheKey } from "./utils";

const QUERY_STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
};

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const useTableQuery = ({ filtersApplied, searchQuery, pageNumber }) => {
  const [state, setState] = useState({
    data: {},
    error: undefined,
    status: QUERY_STATUS.IDLE,
  });

  const urlParams = useMemo(
    () => ({
      ...filtersApplied,
      name: searchQuery,
      page: pageNumber,
    }),
    [filtersApplied, pageNumber, searchQuery]
  );

  const cacheKey = createCacheKey(BASE_URL, urlParams);

  useEffect(() => {
    const fetchData = async () => {
      setState((prevState) => ({
        ...prevState,
        status: QUERY_STATUS.LOADING,
      }));

      try {
        const res = await fetch(serializeUrlParams(BASE_URL, urlParams)).then(
          (res) => res.json()
        );

        setState((prevState) => ({
          ...prevState,
          status: QUERY_STATUS.IDLE,
          data: {
            ...prevState.data,
            [cacheKey]: res,
          },
        }));
      } catch (err) {
        setState((prevState) => ({
          ...prevState,
          error: err,
          status: QUERY_STATUS.IDLE,
        }));
      }
    };

    if (!state.data[cacheKey]) {
      fetchData();
    }
  }, [
    filtersApplied,
    pageNumber,
    searchQuery,
    state.data,
    urlParams,
    cacheKey,
  ]);

  return {
    data: state.data[cacheKey],
    error: state.error,
    loading: !state.data[cacheKey] && !state.error,
  };
};
