import { useQuery } from "@apollo/client";
import { GET_LANGUAGE_CODE } from "../../util/utils";
import { useParams } from "react-router-dom";
import CountriesList from "../../components/CountriesList/CountriesList";
import { Card, Layout } from "antd";

import React from "react";
const { Content } = Layout;

export default function LanguageDetail() {
  let params = useParams();
  const code = params.languageId;

  const { loading, error, data } = useQuery(GET_LANGUAGE_CODE, {
    variables: { code },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <pre>Error : {JSON.stringify(error, null, 2)}</pre>;

  console.log(data);

  const name = data.language.name;
  const spelling = data.language.native;
  const lCode = data.language.code;
  return (
    <Layout>
      <Content>
        <Card title={<h1>Language : {name}</h1>}>
          <Card title={<h3>Details</h3>} type="inner">
            <div>Name: {name}</div>
            <div>Native spelling:{spelling}</div>
          </Card>

          <CountriesList code={lCode} />
        </Card>
      </Content>
    </Layout>
  );
}
