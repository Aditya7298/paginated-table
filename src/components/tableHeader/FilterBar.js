import { useMemo } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { TABLE_ACTIONS } from "../constants";

const adaptFilters = (selectedFilters, allowedFilters) => {
  return allowedFilters.map(({ field, ...rest }) => ({
    ...rest,
    field,
    selectedValue: selectedFilters[field] ?? "",
  }));
};

export const FilterBar = ({ selectedFilters, allowedFilters, onAction }) => {
  const adaptedFilters = useMemo(
    () => adaptFilters(selectedFilters, allowedFilters),
    [allowedFilters, selectedFilters]
  );

  const areFiltersApplied = useMemo(
    () =>
      adaptedFilters.reduce((acc, filter) => {
        if (!filter.selectedValue) {
          return acc || false;
        }

        return true;
      }, false),
    [adaptedFilters]
  );

  const handleChange = (name, value) => {
    onAction({
      type: TABLE_ACTIONS.APPLY_FILTER,
      payload: {
        [name]: value,
      },
    });
  };

  const resetFilters = () => {
    onAction({
      type: TABLE_ACTIONS.RESET_FILTERS,
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      {adaptedFilters.map(
        ({ field, allowedValues, selectedValue, displayName }) => {
          const labelId = `filter-select-for-${field}`;

          return (
            <FormControl>
              <InputLabel sx={{ marginRight: "5px" }} id={labelId}>
                {displayName}
              </InputLabel>
              <Select
                onChange={(e) => handleChange(field, e.target.value)}
                labelId={labelId}
                id="demo-simple-select-autowidth"
                sx={{ minWidth: 50 }}
                value={selectedValue}
                key={field}
                label="Gender"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {allowedValues.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }
      )}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {areFiltersApplied ? (
          <Button
            sx={{ height: "50px" }}
            variant="contained"
            size="medium"
            onClick={resetFilters}
          >
            Remove Filters
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};
