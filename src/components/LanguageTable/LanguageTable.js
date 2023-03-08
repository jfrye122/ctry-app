import { useQuery } from "@apollo/client";
import { GET_LANGUAGES } from "../../util/utils";
import { Link } from "react-router-dom";
import { Card, List } from "antd";

export default function LanguageTable() {
  const { loading, error, data } = useQuery(GET_LANGUAGES);
  if (loading) {
    return <div>Loading please wait.</div>;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error, null, 3)}</div>;
  }
  return (
    <Card title={<h1>Languages</h1>} type="inner">
      <List
        // bordered
        dataSource={data.languages}
        renderItem={(item) => (
          <List.Item>
            <Link to={`../language/${item.code}`} key={item.code}>
              {item.name}
            </Link>
          </List.Item>
        )}
      />
    </Card>
  );
}
