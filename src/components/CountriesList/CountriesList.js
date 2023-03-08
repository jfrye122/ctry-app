import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_COUNTRIESWITHLANGUAGES } from "../../util/utils.js";
import { Card, Space} from "antd";

export default function CountriesList({code}) {
  const rows = [];

  const { loading, error, data } = useQuery(GET_COUNTRIESWITHLANGUAGES);
  if (loading) {
    return <div>Loading please wait.</div>;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error, null, 3)}</div>;
  }

//   console.log(data);
 
  data.countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (language.code === code) {
        rows.push(<div key={country.code}> 
            <Link to={`../country/${country.code}`}>{country.name}</Link></div>);
      }
      return;
    });
    return;
  });

//   console.log(rows);
  return (
    <Card title={<h3>Spoken in: </h3>} type="inner" style={{
      marginTop: 16,
    }}>
      <Space direction="vertical">{rows}</Space>
      
    </Card>
  );
}
