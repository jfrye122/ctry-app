import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_CODE } from "../util/utils";
import { Link, Navigate, useParams } from "react-router-dom";

export default function CountryDetail() {
  let params = useParams();
  const code = params.countryId;

  const { loading, error, data } = useQuery(GET_COUNTRY_CODE, {
    variables: { code },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <pre>Error : {JSON.stringify(error, null, 2)}</pre>;

  console.log(data);

  //have the data
  const name = data.country.name;
  const capital = data.country.capital;
  const currency = data.country.currency;

  const languages = data.country.languages.map((language) => (
    <Link to={`../language/${language.code}`} key={language.code} replace={false} >
      {language.name}
    </Link>
  ));

  return (
    <>
      <h1>Country Details</h1>
      <div>Country Name: {name}</div>
      <div>Captital: {capital}</div>
      <div>Currency: {currency}</div>

      <h2>Languages spoken:</h2>
      <div>{languages}</div>
    </>
  );
}
