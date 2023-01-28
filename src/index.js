import ReactDOM from "react-dom/client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
