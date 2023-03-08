import { gql } from "@apollo/client";

export const CORE_COUNTRIES_FIELDS = gql`
  fragment CoreCountriesFields on Contries {
    code
    name
  }
`;
