import React from "react";
import Container from "react-bootstrap/Container";
import Jumbo from "react-bootstrap/Jumbotron";

const Header = (props) => (
  <Jumbo fluid className="text-center" style={{backgroundColor: "#B3A786", padding: "35px"}}>
    <Container>
      <h1>Google (React) Books Search</h1>
      <h4>Search & save books of interest!</h4>
    </Container>
  </Jumbo>
);

export default Header;
