import { useTableState } from "./useTableState";
import { useTableQuery } from "./useTableQuery";

export const useTable = () => {
  const [state, onAction] = useTableState();

  const { data, loading, error } = useTableQuery({
    filtersApplied: state.filtersApplied,
    searchQuery: state.searchQuery,
    pageNumber: state.pageNumber,
  });

  return { state, onAction, data, loading, error };
};
