import { useQuery } from "@apollo/client";
import { GET_LANGUAGE_CODE } from "../util/utils";

export function LanguageList({code}) {
    const {loading, error, data} = useQuery(GET_LANGUAGE_CODE,{ variables: {code}});
    if (loading) {
        return <div>Loading please wait.</div>
    }
    if (error) {
        <div>Error: {error.message}</div>
    }
    const languageName = data.language.name;
    const nativeSpelling = data.language.nativeSpelling;
    const listItems = data.continents.map((continents) => (
        <li key={continents.code}>{continents.name}</li>
    ));
    return (
        <div>
            <h2>Language Name: {languageName}</h2>
            <h2>Native Spelling: {nativeSpelling}</h2>
            <ul>{listItems}</ul>
        </div>
    );
}