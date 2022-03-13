import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { TABLE_ACTIONS } from "../constants";

const adaptFilters = (selectedFilters, allowedFilters) => {
  return allowedFilters.map(({ field, ...rest }) => ({
    ...rest,
    field,
    selectedValue: selectedFilters[field],
  }));
};

export const FilterBar = ({ selectedFilters, allowedFilters, onAction }) => {
  const adaptedFilters = adaptFilters(selectedFilters, allowedFilters);

  const handleChange = (name, value) => {
    onAction({
      type: TABLE_ACTIONS.APPLY_FILTER,
      payload: {
        [name]: value,
      },
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
    </Box>
  );
};
