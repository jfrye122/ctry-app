import "./Home.css";
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../util/utils";

import FilterableCountryTable from "../../components/FilterableCountryTable/FilterableCountryTable";
import LanguageTable from "../../components/LanguageTable/LanguageTable";

function Home() {

  //PF: Apollo hook (this is your {loading, error, data}: useQuery(<<someGqlQuery>>, { variablesObj}))
  //PF: Look into how to use variables/filtering/subqueries in queries.
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  //PF: What happens when we're in a loading state? What do we display?
  if (loading) return <div>Looks like i'm loading</div>;
  //PF: What happens when we're in a error state? What do we display?
  if (error)
    return <pre>We're in the error area! {JSON.stringify(error, null, 2)}</pre>;

  console.log(data);

  return (
    <section>
      <FilterableCountryTable continents={data.continents} />
      <LanguageTable />
    </section>
  );
}

export default Home;
