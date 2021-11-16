import logo from "./logo.svg";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import "./App.css";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Container fluid className="bg">
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand href="#home" className="brand">
            TheLittleMermaid
          </Navbar.Brand>
          <Navbar.Toggle
            className="left"
            aria-controls="basic-navbar-nav fontfix"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="left">
              <Nav.Link href="#home" className="nav-between ">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-between">
                Story
              </Nav.Link>
              <Nav.Link href="#aboutus" className="nav-between">
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
      </Container>
    </div>
  );
}

export default App;
