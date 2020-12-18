import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand href="/" className="font-weight-bold text-white">
            Blueprint Dashboard
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/create-pricesheet">
                <Nav.Link href="/create-pricesheet" className="font-weight-medium text-white">Create Pricesheet</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-mockup">
                <Nav.Link href="/create-mockup" className="font-weight-medium text-white">Create Mockup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/playground">
                <Nav.Link href="/playground" className="font-weight-medium text-white">Playground</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
