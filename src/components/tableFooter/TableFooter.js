import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";
import { TABLE_ACTIONS } from "../constants";

export const TableFooter = ({ pageNumber, totalRowCount, onAction }) => {
  const handlePageChange = (_, selectedPage) => {
    onAction({
      type: TABLE_ACTIONS.CHANGE_PAGE_NUMBER,
      payload: selectedPage,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <TablePagination
        sx={{ width: "100%" }}
        count={totalRowCount}
        rowsPerPageOptions={[20]}
        rowsPerPage={20}
        page={pageNumber}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};
