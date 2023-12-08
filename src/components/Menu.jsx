import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Menu() {
  return (
    <div>
      <Navbar expand='lg' className='bg-success'>
        <Container>
          <Navbar.Brand as={Link} to='/' className='fs-1 fst-italic'>
            GoFood
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
