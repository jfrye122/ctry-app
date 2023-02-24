import CountryContenentRow from "../CountryContenentRow/CountryContenentRow";
import CountryRow from "../CountryRow/CountryRow";

export default function CountryTable({ continents }) {
  const rows = [];
  //let lastContinent = null;

  continents.forEach((continent) => {
    rows.push(
      <CountryContenentRow name={continent.name} key={"CC" + continent.code} />
    );
    continent.countries.forEach((country) => {
      rows.push(<CountryRow name={country.name} key={country.code} />);
    });
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
