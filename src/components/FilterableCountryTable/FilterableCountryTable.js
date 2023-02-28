import SearchBar from "../SearchBar/SearchBar";
import CountryTable from "../CountryTable/CountryTable";
import { useState } from "react";

export default function FilterableCountryTable({ continents }) {
  const [filterText, setFilterText] = useState("");

  const [isAFChecked, setIsAFChecked] = useState(true); //JF these are temp till I change it to a better way that groups them.
  const [isANChecked, setIsANChecked] = useState(true);
  const [isASChecked, setIsASChecked] = useState(true);
  const [isEUChecked, setIsEUChecked] = useState(true);
  const [isNAChecked, setIsNAChecked] = useState(true);
  const [isOCChecked, setIsOCChecked] = useState(true);
  const [isSAChecked, setIsSAChecked] = useState(true);

  //JF this will replace above
  const [checkedState, setCheckedState] = useState(
    new Array(continents.length).fill(false)
  );

  //create

  return (
    <div>
      <SearchBar
        filterText={filterText}
        isAFChecked={isAFChecked}
        isANChecked={isANChecked}
        isASChecked={isASChecked}
        isEUChecked={isEUChecked}
        isNAChecked={isNAChecked}
        isOCChecked={isOCChecked}
        isSAChecked={isSAChecked}
        onFilterTextChange={setFilterText}
        onIsAFChecked={setIsAFChecked}
        onIsANChecked={setIsANChecked}
        onIsASChecked={setIsASChecked}
        onIsEUChecked={setIsEUChecked}
        onIsNAChecked={setIsNAChecked}
        onIsOCChecked={setIsOCChecked}
        onIsSAChecked={setIsSAChecked}
      />
      <CountryTable
        continents={continents}
        filterText={filterText}
        isAFChecked={isAFChecked}
        isANChecked={isANChecked}
        isASChecked={isASChecked}
        isEUChecked={isEUChecked}
        isNAChecked={isNAChecked}
        isOCChecked={isOCChecked}
        isSAChecked={isSAChecked}
      />
    </div>
  );
}
