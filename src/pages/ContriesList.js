import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../util/utils";

//PF: Usually this is split into 2 compoonents. 
//JF: I think you are talking about making this its own compoonent.
export const myLists = ["Peter", "Sachin", "Kevin", "Dhoni", "Alisa"];//JF: This is a temp list

export function ContriesList(props) {
    const {loading, error, data} = useQuery(GET_CONTINENTS);
    if (loading) {
        return <div>Loading please wait.</div>
    }
    if (error) {
        <div>Error: {JSON.stringify(error,null,3)}</div>
    }
    //const myLists = props.myLists;
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
