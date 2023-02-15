import Container from "react-bootstrap/Container";
import logoimg from "../../imgs/tori-icon.png";
import './Navbar.css'
import { Link } from "react-router-dom";

// IMPORT PAGES
import Home from "../../Pages/Home/Home";
import Contacto from "../../Pages/Contacto/Contacto";
import FigurasAnime from "../../Pages/FigurasAnime/FigurasAnime";
import FigurasComic from "../../Pages/FigurasComic/FigurasComic";
import Otros from "../../Pages/Otros/Otros";


// IMPORT COMPONENTS
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navigation">
      <div className="divLogo">
      <img src={logoimg} className="logoTori" alt="logo" />
      <p className="textBrand">ToriShop</p>
      </div>
      
      <ul className="List-ul">
        
      <Link to="/" className="Link">Home</Link>
      <Link to="/Contacto" className="Link">Contacto</Link>
      <Link to="/FigurasAnime" className="Link">Figuras Anime</Link>
      <Link to="/FigurasComic" className="Link">Figuras Comic</Link>
      <Link to="/Otros" className="Link">Otros</Link> 
      </ul>
      <div className="divCart">
      <CartWidget/>
      </div>
     
    </nav>
    
  );
}

export default Navbar;

// <Navbar bg="light" expand="lg">
//       <Container className="contNav">
//         <div className="divBrand" >
//           <img src={logoimg} className="logoTori" alt="logo" />
//           <p href="#home" className="textBrand">ToriShop2</p>
//         </div>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link className="categoriesNav" href="#home">Home</Nav.Link>
//             <Nav.Link className="categoriesNav" href="#link">Contacto</Nav.Link>
//             <NavDropdown className="categoriesNav" title="Productos" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Figuras Anime</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Figuras Comics
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Otros</NavDropdown.Item>
//               <NavDropdown.Divider />
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//       <CartWidget/>
//     </Navbar>
