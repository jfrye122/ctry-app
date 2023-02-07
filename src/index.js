import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import LanguageDetail from "./pages/LanguageDetail";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout"; //temp for seeing pages

import store from "./app/store";
import { Provider } from "react-redux";

//PF: Putting the apollo client into a utility class.
import { AnApolloClient } from "./util/utils";
//PF: Import as necessary to create the Apollo provider.
import { ApolloProvider} from "@apollo/client";

//init GraphQL client
const client = AnApolloClient();

//const LIST_CCONTINENTS = client.query({query : gql`})



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          //PF: By having the nested route, the layout component will always render above the others.
        }
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="country" element={<CountryDetail />} />
          {
            //PF Will need to add in routes that can support a path like `/country/:id`
            //Make sure the component can accept the prop to figure out which id is being passed.
          }
          <Route path="language" element={<LanguageDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode store={store}>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);