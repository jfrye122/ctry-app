import { useState } from "react";
import "./Home.css";
import { useQuery, gql } from "@apollo/client";
//import { AnApolloClient } from "../../util/utils";
import { ContriesList } from "../ContriesList";

import FilterableCountryTable from "../../components/FilterableCountryTable/FilterableCountryTable";

function Home() {
  const [state, setState] = useState({ searchText: "" });

  //PF: Apollo hook (this is your {loading, error, data}: useQuery(<<someGqlQuery>>, { variablesObj}))
  //PF: Look into how to use variables/filtering/subqueries in queries.
  const { loading, error, data } = useQuery(gql`
    {
      continents {
        code
        name
        countries {
          code
          name
        }
      }
    }
  `);

  //PF: What happens when we're in a loading state? What do we display?
  if (loading) return <div>Looks like i'm loading</div>;
  //PF: What happens when we're in a error state? What do we display?
  if (error)
    return <pre>We're in the error area! {JSON.stringify(error, null, 2)}</pre>;

  //PF: We got this far, looks like we have data.
  //PF: How do we make sure the query only gets called once?

  console.log(data); //Heres the country data.

  return (
    <section>
      <FilterableCountryTable continents={data.continents} />
      <h1>Type to search by county name.</h1>
      <form>
        <input
          type="text"
          value={state.searchText}
          onChange={(e) => setState({ ...state, searchText: e.target.value })}
        />
        <button>Search</button>
      </form>
      <div>
        <li>
          <ContriesList />
        </li>
      </div>
      <div>
        PF: Here's how we'd show a list of countries.
        <ul></ul>
      </div>
    </section>
  );
}

export default Home;
