import { Link } from "react-router-dom";
import { Card, List } from "antd";
import "./CountryTable.css"
export default function CountryTable({ continents, filterText, selectedIds }) {
  
  //console.log(continents);
  const list = continents.map((continent) => {
    if (selectedIds.has(continent.code)) {
      return (
        <List
          key={"CC" + continent.code}
          header={<h3>{continent.name}</h3>}
          bordered
          dataSource={continent.countries}
          renderItem={(item) => (
            <List.Item key={item.code}>
              <Link
                className={
                  item.name.toLowerCase().indexOf(filterText.toLowerCase()) ===
                    -1 || filterText === ""
                    ? ""
                    : "highlighted"
                }
                to={`country/${item.code}`}
              >
                {item.name}
              </Link>
            </List.Item>
          )}
        />
      );
    }else{
      return null;
    }
  });

  return (
    <Card title={<h3>Continents Display</h3>} type="inner" style={{
      marginTop: 16,
    }}>
      {list}
    </Card>
  );
}
