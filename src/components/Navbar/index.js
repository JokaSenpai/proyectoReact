import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <img src='./src/imgs/tori-icon.png' alt='logo' />
      </div>
      <div className="navbar-nav">
        <a className="nav-item nav-link">Mi cuenta</a>
        <a className="nav-item nav-link">Carrito de compras</a>
      </div>
    </nav>
  );
}

export default Navbar;
