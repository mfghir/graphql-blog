import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

import "./styles/font.css";
import {ThemeProvider} from "@mui/material"
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import theme from "./mui/theme";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/cl5rwt7y10khr01ukc81y0y22/master",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      
    <App />
    </ThemeProvider>
  </ApolloProvider>
);
