import React from "react";
import { Container, Navbar, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>
    <Navbar className="grey darken-2">
      <Container>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="About">About</NavLink></li>
      </Container>
    </Navbar>
  </Row>
);

export default Header;
