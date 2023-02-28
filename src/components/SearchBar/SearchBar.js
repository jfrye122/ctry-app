import ContinentFilter from "../ContinentFilter/ContenentFilter";

export default function SearchBar({
  filterText,
  onFilterTextChange,
  selectedIds,
  onHandleToggle,
  continents,
}) {
  return (
    <>
      <label>
        Search for:{" "}
        <input
          type="text"
          value={filterText}
          placeholder="Country Name"
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </label>
      <br />
      {continents.map((continent) => (
        <ContinentFilter
          key={continent.code}
          code={continent.code}
          name={continent.name}
          isSelected={selectedIds.has(continent.code)}
          onToggle={onHandleToggle}
        />
      ))}
    </>
  );
}
