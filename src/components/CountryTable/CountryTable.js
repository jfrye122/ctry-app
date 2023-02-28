import CountryContenentRow from "../CountryContenentRow/CountryContenentRow";
import CountryRow from "../CountryRow/CountryRow";

export default function CountryTable({ continents, filterText, selectedIds }) {
  const rows = [];

  continents.forEach((continent) => {
    if (selectedIds.has(continent.code)) {
      rows.push(
        <CountryContenentRow
          name={continent.name}
          key={"CC" + continent.code}
        />
      );
      continent.countries.forEach((country) => {
        const countryRow =
          country.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ||
          filterText === "" ? (
            <CountryRow name={country.name} key={country.code} />
          ) : (
            <CountryRow
              name={country.name}
              isHighlighted={true}
              key={country.code}
            />
          );
        rows.push(countryRow);
        return;
      });
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
