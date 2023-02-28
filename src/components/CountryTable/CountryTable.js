import CountryContenentRow from "../CountryContenentRow/CountryContenentRow";
import CountryRow from "../CountryRow/CountryRow";

export default function CountryTable({
  continents,
  filterText,
  isAFChecked,
  isANChecked,
  isASChecked,
  isEUChecked,
  isNAChecked,
  isOCChecked,
  isSAChecked,
}) {
  const rows = [];
  //let lastContinent = null;
  // continents.map(({ name, code }, index) => {
  //   return (
  //     <li key={index}>
  //       <div className="cont-list-item">
  //         <div className="left-section">
  //           <input
  //             type="checkbox"
  //             id={`custom-checkbox-${index}`}
  //             name={name}
  //             value={name}
  //           />
  //           <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
  //         </div>
  //         <div className="right-section">{code}</div>
  //       </div>
  //     </li>
  //   );
  // });

  function placeFilteredTable(continent, filterText){
    rows.push(
      <CountryContenentRow
        name={continent.name}
        key={"CC" + continent.code}
      />
    );
  
    continent.countries.forEach((country) => {
      const countryRow = (country.name.toLowerCase().indexOf(filterText.toLowerCase()) ===
      -1) || filterText === '' ? <CountryRow name={country.name} key={country.code} /> : <CountryRow name={country.name} color={'yellow'} key={country.code} />
      
      rows.push(countryRow);
      return;
    });
  }

  continents.forEach((continent) => {
    switch (continent.code) {
      case "AF":
        if (isAFChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
      case "AN":
        if (isANChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
      case "AS":
        if (isASChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
      case "EU":
        if (isEUChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
      case "NA":
        if (isNAChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
      case "OC":
        if (isOCChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
      case "SA":
        if (isSAChecked) {
          placeFilteredTable(continent, filterText);
          return;
        }
        break;
    }
  });


  
  return (
    <table>
      <thead>
        <tr>
          <th>ContriesList</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

