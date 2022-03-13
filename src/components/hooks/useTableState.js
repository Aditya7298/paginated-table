import { useReducer } from "react";

import { TABLE_ACTIONS } from "../constants";

const INITIAL_STATE = {
  searchQuery: "",
  filtersApplied: [],
  pageNumber: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TABLE_ACTIONS.EDIT_SEARCH_QUERY:
      return { ...state, pageNumber: 0, searchQuery: action.payload };

    case TABLE_ACTIONS.APPLY_FILTER:
      return {
        ...state,
        filtersApplied: [...state.filtersApplied, action.payload],
      };

    case TABLE_ACTIONS.REMOVE_FILTER:
      return {
        ...state,
        filtersApplied: state.filtersApplied.filter(
          (filter) => filter !== action.payload
        ),
      };

    case TABLE_ACTIONS.CHANGE_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.payload,
      };

    default:
      throw new Error("Unrecognized Action");
  }
};

export const useTableState = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return [state, dispatch];
};
