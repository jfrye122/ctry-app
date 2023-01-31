import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
//import App from './App';

import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
import LanguageDetail from './pages/LanguageDetail';
import NoPage from './pages/NoPage'

import Layout from './pages/Layout';//temp for seeing pages 

import store from './app/store'
import { Provider } from 'react-redux'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
//init GraphQL client
const client = new ApolloClient({uri:'https://countries.trevorblades.com/graphql', cache: new InMemoryCache(), });

//const LIST_CCONTINENTS = client.query({query : gql`}) 

const LIST_CCONTINENTS2 = gql`
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

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='country' element={<CountryDetail />} />
        <Route path='language' element={<LanguageDetail />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>
);


 