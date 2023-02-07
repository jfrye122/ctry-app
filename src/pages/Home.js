import { useState } from "react";
import "./Home.css";
import { useQuery, gql } from "@apollo/client";

const Home = () => {
  const [state, setState] = useState({ searchText: "" });

  //PF: Apollo hook (this is your {loading, error, data}: useQuery(<<someGqlQuery>>, { variablesObj}))
  //PF: Look into how to use variables/filtering/subqueries in queries.
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        code
        capital
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
          <NameList myLists={myLists} />
        </li>
      </div>
      <div>
        PF: Here's how we'd show a list of countries.
        <ul>
          {data.countries.map((country) => (
            <li key={country.code}>{country.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

//PF: Usually this is split into 2 compoonents.
const myLists = ["Peter", "Sachin", "Kevin", "Dhoni", "Alisa"];

function NameList(props) {
  const myLists = props.myLists;
  const listItems = myLists.map((myList, idx) => (
    <li key={myList + idx}>{myList}</li>
  ));
  return (
    <div>
      <h2>Rendering Lists inside component</h2>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Home;
