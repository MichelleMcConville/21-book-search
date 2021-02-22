import React from "react";
import Container from "react-bootstrap/Container";
import Jumbo from "react-bootstrap/Jumbotron";

const Header = (props) => (
  <Jumbo fluid className="text-center" style={{backgroundColor: "#B3A786"}}>
    <Container>
      <h1>Google (React) Books Search</h1>
      <p>Search & save books of interest!</p>
    </Container>
  </Jumbo>
);

export default Header;
