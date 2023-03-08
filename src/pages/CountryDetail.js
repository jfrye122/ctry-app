import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_CODE } from "../util/utils";
import { Link, useParams } from "react-router-dom";
import { Card, Space, Layout } from "antd";

const { Content } = Layout;

export default function CountryDetail() {
  let params = useParams();
  const code = params.countryId;

  const { loading, error, data } = useQuery(GET_COUNTRY_CODE, {
    variables: { code },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <pre>Error : {JSON.stringify(error, null, 2)}</pre>;

  //console.log(data);

  const name = data.country.name;
  const capital = data.country.capital;
  const currency = data.country.currency;

  const languages = data.country.languages.map((language) => (
    <Link to={`../language/${language.code}`} key={language.code}>
      {language.name}
    </Link>
  ));

  return (
    <Layout>
      <Content>
        <Card title={<h1>Country : {name} </h1>}>
          <Card title={<h3> Details </h3>} type="inner">
            <div>Name: {name}</div>
            <div>Captital: {capital}</div>
            <div>Currency: {currency}</div>
          </Card>

          <Card
            style={{
              marginTop: 16,
            }}
            title={<h3>Languages spoken:</h3>}
            type="inner"
          >
            <Space direction="vertical">{languages}</Space>
          </Card>
        </Card>
      </Content>
    </Layout>
  );
}
