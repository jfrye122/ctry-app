import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      code
      countries {
        name
        code
      }
    }
  }
`;

export const GET_COUNTRIESWITHLANGUAGES = gql`
  query GetContries {
    countries {
      name
      code
      languages{
        code
      }
    }
  }
`;

export const GET_COUNTRY_CODE = gql`
  query Countries($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      languages {
        code
        name
      }
    }
  }
`;

export const GET_LANGUAGES = gql`
  query GetLanguages {
    languages {
      name
      code
    }
  }
`;
export const GET_LANGUAGE_CODE = gql`
  query Countries($code: ID!) {
    language(code: $code) {
      name
      native
      code
    }
  }
`; //JF in progress will need to look into getting lang
