export default function SearchBar({
  filterText,
  isAFChecked,
  isANChecked,
  isASChecked,
  isEUChecked,
  isNAChecked,
  isOCChecked,
  isSAChecked,
  onFilterTextChange,
  onIsAFChecked,
  onIsANChecked,
  onIsASChecked,
  onIsEUChecked,
  onIsNAChecked,
  onIsOCChecked,
  onIsSAChecked
}) {
  return (
    <form>
      <label>Search for:{' '}
      <input
        type="text"
        value={filterText}
        placeholder="Country Name"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      </label><br />
      <label>
        <input
          type="checkbox"
          checked={isAFChecked}
          onChange={(e) => onIsAFChecked(e.target.checked)}
        />{" "}
        Africa
      </label>
      <label>
        <input
          type="checkbox"
          checked={isANChecked}
          onChange={(e) => onIsANChecked(e.target.checked)}
        />{" "}
        Antarctica
        </label>
        <input
          type="checkbox"
          checked={isASChecked}
          onChange={(e) => onIsASChecked(e.target.checked)}
        />{" "}
        Asia
        <input
          type="checkbox"
          checked={isEUChecked}
          onChange={(e) => onIsEUChecked(e.target.checked)}
        />{" "}
        Europe
        <input
          type="checkbox"
          checked={isNAChecked}
          onChange={(e) => onIsNAChecked(e.target.checked)}
        />{" "}
        North America
        <input
          type="checkbox"
          checked={isOCChecked}
          onChange={(e) => onIsOCChecked(e.target.checked)}
        />{" "}
        Oceania
        <input
          type="checkbox"
          checked={isSAChecked}
          onChange={(e) => onIsSAChecked(e.target.checked)}
        />{" "}
        South America
    </form>
  );
}
