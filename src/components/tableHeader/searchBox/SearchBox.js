const SEARCH_ACTION = "EDIT_SEARCH_QUERY";

export const SearchBox = ({ value, onAction }) => {
  const handleChange = (e) => {
    const searchQuery = e.target.value;

    onAction({
      type: SEARCH_ACTION,
      payload: searchQuery,
    });
  };

  return <input onChange={handleChange} type="text" value={value} />;
};
