import "./Home.css";
import { useState } from "react";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../util/utils";

import SearchBar from "../../components/SearchBar/SearchBar";
import CountryTable from "../../components/CountryTable/CountryTable";
import LanguageTable from "../../components/LanguageTable/LanguageTable";
import { Card, Layout, Row, Col } from "antd";
const { Content } = Layout;

function Home() {
  const [filterText, setFilterText] = useState("");
  const [selectedIds, setSelectedIds] = useState(new Set());

  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (loading) return <div>Loading... </div>;
  if (error) return <pre>Error : {JSON.stringify(error, null, 2)}</pre>;
  console.log(data);

  let continents = data.continents;

  // const tlist = [];//JF end list to add to
  // var obj = [...data.continents];
  // console.log(obj);
  // for (let i = 0; i < data.continents.length; i++) {
  //   const element = data.continents[i];
  //   var obj2 = [...element.countries];
  //   obj2.sort((a, b) => a.name > b.name ? 1 : -1);

  //   tlist.push(data.continents[i],)
  // }
  // obj.forEach(element => {
  //   var obj2 = [...element.countries];
  //   obj2.sort((a, b) => a.name > b.name ? 1 : -1);
  //   console.log(obj2);
  //   element.countries = obj2;
  // });

  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <>
      <Layout>
        <Content>
          <Row gutter={8}>
            <Col span={12}>
              <Card type="inner" title={<h1>Countries</h1>}>
                <SearchBar
                  filterText={filterText}
                  onFilterTextChange={setFilterText}
                  selectedIds={selectedIds}
                  onHandleToggle={handleToggle}
                  continents={continents}
                />
                <CountryTable
                  continents={continents}
                  filterText={filterText}
                  selectedIds={selectedIds}
                />
              </Card>
            </Col>
            <Col span={12}>
              <LanguageTable />
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Home;
