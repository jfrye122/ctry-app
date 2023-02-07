import React from "react";
import { gql, useQuery } from "@apollo/client";


export default function CountryDetail({code})  {//JF: THIS is for asking a question about props
    const { loading, error, data } = useQuery(

    )
    return <h1>Country Detail List</h1>;
};