import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});


//PF: Should also be stored in a utility class for reusability. Use GQL fragments.
export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetContries {
    countries {
      code
      name
    }
  }
`;

export const GET_COUNTRY_CODE = gql`
  query Countries($code: String!) {
    country(code: $code) {
      name
      capital
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
  query Countries($code: String) {
    language(code: $code) {
      name
      native
      code
    }
  }
`; //JF in progress will need to look into getting lang
