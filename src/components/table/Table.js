import "./Table.css";
import { useTable } from "../hooks/useTable";
import { TABLE_ACTIONS } from "../constants";

export const Table = () => {
  const [state, onAction] = useTable();

  const onClick = () => {
    onAction({
      type: TABLE_ACTIONS.CHANGE_PAGE_NUMBER,
      payload: state.pageNumber + 1,
    });
  };

  return <button onClick={onClick}>Next Page</button>;
};
