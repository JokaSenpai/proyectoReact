import logoimg from "../../imgs/tori-icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="Navigation navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <img src={logoimg} className="logoTori" alt="logo" />
        <p className="textBrand">ToriShop</p>

        <ul className="List-ul navbar-nav mr-auto">
          <Link to="/" className="Link">
            Home
          </Link>
         
          <li className="nav-item dropdown">
            
            {/* eslint-disable */}
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorias
            </a>
            
            {/* eslint-enable */}

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/Categorias/FigurasAnime" className="dropdown-item">
                Figuras Anime
              </Link>
              <Link to="/Categorias/FigurasComic" className="dropdown-item">
                Figuras Comic
              </Link>
             
            </div>
          </li>

          <Link to="/Contacto" className="Link">
            Contacto
          </Link>
          
        </ul>
        <div className="divCart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

