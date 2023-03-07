import LanguageRow from "../LanguageRow/LanguageRow";

import { useQuery } from "@apollo/client";
import { GET_LANGUAGES } from "../../util/utils";
import { Link } from "react-router-dom";

export default function LanguageTable() {
  const { loading, error, data } = useQuery(GET_LANGUAGES);
  if (loading) {
    return <div>Loading please wait.</div>;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error, null, 3)}</div>;
  }

  const tableItems = data.languages.map((language) => (
    <tr>
      <td colSpan="2" align="center">
        <Link to={`../language/${language.code}`} key={language.code}>
          {language.name}
        </Link>
      </td>
    </tr>
    // <LanguageRow name={language.name} key={language.code} />
    //<li key={language.code}>{language.name}</li>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Languages</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </table>
  );
}
