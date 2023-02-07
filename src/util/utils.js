
//PF: Should also be stored in a utility class for reusability. Use GQL fragments.
export const GET_CCONTINENTS = gql`
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

export const GET_COUNTRIES_CODE = gql`
  query Countries($code: String!) {
    countries(code: $code) {
      code
      name
    }
  }
`;