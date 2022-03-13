import "./TableHeader.css";
import { SearchBox } from "./searchBox/SearchBox";

export const TableHeader = ({ state, onAction }) => {
  return (
    <div className="TableHeader">
      <div className="table-header_search-box">
        <SearchBox value={state.searchQuery} onAction={onAction} />
      </div>
    </div>
  );
};
