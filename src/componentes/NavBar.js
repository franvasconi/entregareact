import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';



const App = () => {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>HYPECLOTHES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#categoria1">Shop</Nav.Link>
              <Nav.Link href="#categoria2">Nosotros</Nav.Link>
              <Nav.Link href="#categoria2">New Drop</Nav.Link>
              <Nav.Link href="#categoria2">Politicas</Nav.Link>
              <Nav.Link href="#categoria2">Devoluciones y envios</Nav.Link>
  
              
            </Nav>
            <CardWidget />
          </Navbar.Collapse>
        </Navbar>
        <ItemListContainer greeting={<span style={{ color: '#fff' }}>¡Bienvenidos a HYPECLOTHES!</span>} />
      </div>
    );
  };

  
  export default Navbar;