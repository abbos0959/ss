import React from "react";
import { Nav, Navbar, Container, Link, NavDropdown, Form, Button } from "react-bootstrap";

export const Header = () => {
   return (
      <header>
         <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
               <Navbar.Brand href="/">Abbos Akromovich</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav style={{ marginLeft: "auto" }} className="ml-auto ">
                     <Nav.Link href="/cart">
                        <i className="fas fa-shopping-cart"></i> Cart
                     </Nav.Link>
                     <Nav.Link href="/login">
                        <i className="fas fa-user"></i> Sign In
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   );
};
