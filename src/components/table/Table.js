import "./Table.css";
import { TableHeader } from "../tableHeader";
import { useTable } from "../hooks/useTable";

export const Table = () => {
  const [state, onAction] = useTable();

  return (
    <>
      <TableHeader state={state} onAction={onAction} />
    </>
  );
};
