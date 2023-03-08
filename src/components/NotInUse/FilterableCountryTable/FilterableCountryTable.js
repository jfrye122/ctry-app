import SearchBar from "../../SearchBar/SearchBar";
import CountryTable from "../../CountryTable/CountryTable";
import { useState } from "react";

export default function FilterableCountryTable({ continents }) {

  const [filterText, setFilterText] = useState("");
  const [selectedIds, setSelectedIds] = useState(new Set());
  
  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setFilterText}
        selectedIds={selectedIds}
        onHandleToggle={handleToggle}
        continents={continents}
      />
      <CountryTable
        continents={continents}
        filterText={filterText}
        selectedIds={selectedIds}
      />
    </div>
  );
}
