import { TableHeader } from "../tableHeader";
import { TableBody } from "../tableBody";
import { TableFooter } from "../tableFooter/TableFooter";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTable } from "../hooks/useTable";

//use config for this
const COLUMNS = ["name", "species", "status", "type", "gender"];

export const Table = () => {
  const { state, data, onAction, loading, error } = useTable();

  let mainEl;
  if (loading) {
    mainEl = (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "800px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  } else if (error) {
    mainEl = null;
  } else if (!data.results) {
    mainEl = null;
  } else {
    mainEl = (
      <>
        <TableBody columns={COLUMNS} rows={data.results} />
        <TableFooter
          pageNumber={state.pageNumber}
          totalRowCount={data?.info.count}
          onAction={onAction}
        />
      </>
    );
  }

  return (
    <>
      <TableHeader state={state} onAction={onAction} />
      {mainEl}
    </>
  );
};
