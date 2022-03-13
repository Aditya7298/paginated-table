import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const TableBodyComp = ({ columns, rows }) => {
  return (
    <TableContainer sx={{ maxHeight: 800 }} component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>
                <Typography variant="subtitle1">
                  {column.toUpperCase()}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, ind) => (
            <TableRow key={ind}>
              {columns.map((column, ind) => (
                <TableCell key={ind}>
                  <Typography>{row[column]}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { TableBodyComp as TableBody };
