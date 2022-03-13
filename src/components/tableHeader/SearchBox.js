import TextField from "@mui/material/TextField";

const SEARCH_ACTION = "EDIT_SEARCH_QUERY";

export const SearchBox = ({ value, onAction }) => {
  const handleChange = (e) => {
    const searchQuery = e.target.value;

    onAction({
      type: SEARCH_ACTION,
      payload: searchQuery,
    });
  };

  return (
    <TextField
      sx={{ width: "100%" }}
      onChange={handleChange}
      value={value}
      label="Search Name"
    />
  );
};
