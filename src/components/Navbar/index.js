import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoimg from "../../imgs/tori-icon.png";
import './nav.css'
import CartWidget from "../CartWidget";

function Barra() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="contNav">
        <div className="divBrand" >
          <img src={logoimg} className="logoTori" alt="logo" />
          <p href="#home" className="textBrand">ToriShop2</p>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="categoriesNav" href="#home">Home</Nav.Link>
            <Nav.Link className="categoriesNav" href="#link">Contacto</Nav.Link>
            <NavDropdown className="categoriesNav" title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Figuras Anime</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Figuras Comics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default Barra;

// import React from 'react';
// import logoimg from '../../imgs/tori-icon.png';
// import './nav.css'
// import cartImg from '../../imgs/cartcart.png';

// function Nav() {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <div className="navbar-brand">
//         <img src={logoimg} className="logoTori" alt='logo' />
//         <p>ToriShop</p>
//       </div>
//       <div className="navbar-nav">
//         <img src={cartImg} className="cartImg" alt='cart' />
//       </div>
//     </nav>
//   );
// }

// export default Nav;
