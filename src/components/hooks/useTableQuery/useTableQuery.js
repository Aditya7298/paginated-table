import { useEffect, useState } from "react";
import { serializeUrlParams } from "./utils";

const QUERY_STATUS = {
  IDLE: "IDLE",
  LOADING: "LOADING",
};

const fetchDataFromBackend = ({ pageNumber, filters, searchQuery }) => {
  return fetch(
    serializeUrlParams("https://rickandmortyapi.com/api/character", {
      name: searchQuery,
      ...filters,
      page: pageNumber,
    })
  )
    .then((res) => res.json())
    .catch((err) => err);
};

export const useTableQuery = ({ filtersApplied, searchQuery, pageNumber }) => {
  const [state, setState] = useState({
    data: {},
    error: undefined,
    status: QUERY_STATUS.IDLE,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((prevState) => ({
        ...prevState,
        status: QUERY_STATUS.LOADING,
      }));

      try {
        const res = await fetchDataFromBackend({
          pageNumber,
          filters: filtersApplied,
          searchQuery,
        });

        setState((prevState) => ({
          ...prevState,
          status: QUERY_STATUS.IDLE,
          data: {
            ...prevState.data,
            [pageNumber]: res,
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

    if (!state.data[pageNumber]) {
      fetchData();
    }
  }, [filtersApplied, pageNumber, searchQuery, state.data]);

  return {
    data: state.data[pageNumber],
    error: state.error,
    loading: !state.data[pageNumber] && !state.error,
  };
};
