import { Container } from "@chakra-ui/react";
import React from "react";
import Home from "./components/Home";
import "./style.css";
function App() {
  return (
    <Container padding={5} maxW={"container.xl"} margin={"auto"}>
      <Home />
    </Container>
  );
}

export default App;
