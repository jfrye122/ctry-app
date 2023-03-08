import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../util/utils";

export function ContriesList() {
    const {loading, error, data} = useQuery(GET_CONTINENTS);
    if (loading) {
        return <div>Loading please wait.</div>
    }
    if (error) {
        <div>Error: {JSON.stringify(error,null,3)}</div>
    }
    
    const listItems2 = data.continents.map((continents) => (
        <li key={continents.code}>{continents.name}</li>
    ));
    return (
        <div>
            <h2>Rendering Lists inside component</h2>
            <ul>{listItems2}</ul>
        </div>
    );
}
