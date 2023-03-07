import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import store from "./app/store";
//import { Provider } from "react-redux";

//PF: Putting the apollo client into a utility class.
//PF: Import as necessary to create the Apollo provider.
import { ApolloProvider } from "@apollo/client";

//init GraphQL client
import { client } from "./util/utils";
import { ConfigProvider, theme} from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <App />
    </ConfigProvider>
  </ApolloProvider>
);
