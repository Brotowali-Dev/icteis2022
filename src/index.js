import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// Apollo CLient
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
