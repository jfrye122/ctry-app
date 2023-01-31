import { useState } from "react";
import './Home.css';
import { ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client';

const Home = () => {
    const client = new ApolloClient({uri:'https://countries.trevorblades.com/graphql', cache: new InMemoryCache(), });
    const LIST_CCONTINENTS = gql`
    {
      continents {
      code
      name
        countries {
        code
        name
        }
      }
    }`;


    const [country, setCountry] = useState('US');
    const {data, loading, error} = useQuery(LIST_CCONTINENTS, {client});
  
    if (loading || error) {
      return <p>{error ? error.message : 'Loading...'}</p>;
    }
  

    return( 
    <section>
        <select value={country} onChange={event => setCountry(event.target.value)}>
        {data.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
        <h1>Type to search by county name.</h1>
        <form>
            <imput/>
            <button>Search</button>
        </form>
        <div>
            <ui>
                
            </ui>
        </div>
    </section>
    
    )
};

export default Home;