import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ContextProvider>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} xl={12} xxl={10} lg={12}>
            {/* ToggleLangs à gauche sur les petits écrans, en haut sur les écrans moyens et plus grands */}
            <ToggleLangs />
          </Col>
          <Col xs={12} sm={12} xl={12} xxl={10} lg={12}>
            {/* Contenu à droite sur les petits écrans, en bas sur les écrans moyens et plus grands */}
            <Contenu />
          </Col>
        </Row>
      </Container>
    </ContextProvider>
  );
}

export default App;
