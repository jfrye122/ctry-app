import SearchBar from "../SearchBar/SearchBar";
import CountryTable from "../CountryTable/CountryTable";

export default function FilterableCountryTable({ continents }) {
  return (
    <div>
      <SearchBar />
      <CountryTable continents={continents} />
    </div>
  );
}
