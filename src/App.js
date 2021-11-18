import logo from "./Img/logo2.png";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
import Page8 from "./Page8";
import Footer from "./footer";
import "./App.css";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.title = "TheLittleMermaid";
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container fluid className="bg">
      <Navbar expand="lg" sticky="top" className={scrolled ? "scroll" : ""}>
        <Navbar.Brand href="#home" className="brand">
          <img
            src={logo}
            width="150px"
            className={`d-inline-block align-top  ${scrolled ? "logo" : ""}`}
            alt="TheLittleMermaid"
          />
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
            <Nav.Link href="#story" className="nav-between">
              Story
            </Nav.Link>
            <Nav.Link href="#about-us" className="nav-between">
              About us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div id="home">
        <Page1 />
      </div>
      <div id="story">
        <Page2 />
      </div>
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <div id="about-us">
        <Footer />
      </div>
    </Container>
  );
}

export default App;
