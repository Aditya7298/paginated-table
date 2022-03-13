import { SearchBox } from "./SearchBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FilterBar } from "./FilterBar";

export const TableHeader = ({ state, onAction }) => {
  return (
    <Box sx={{ width: "100%", padding: "10px", display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <Typography variant="h5">Paginated Table</Typography>
      </Box>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBox value={state.searchQuery} onAction={onAction} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 2,
        }}
      >
        <FilterBar
          selectedFilters={state.filtersApplied}
          allowedFilters={[
            {
              field: "gender",
              allowedValues: ["male", "female", "unknown", "genderless"],
              displayName: "Gender",
            },
            {
              field: "status",
              displayName: "Status",
              allowedValues: ["alive", "dead", "unknown"],
            },
          ]}
          onAction={onAction}
        />
      </Box>
    </Box>
  );
};
