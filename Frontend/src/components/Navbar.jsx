import React from 'react';
import "../style/Nabvar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__container">
        <span className="navbar__logo">
          Logotipo
        </span>
        <ul className="navbar__menu">
          <li className="navbar__item">{"usd($)"}</li>
          <li className="navbar__item">Espanol</li>
          <li className="navbar__item">Ingresa tu Propiedad</li>
          <li className="navbar__item">Inicia sesion</li>
          <li className="navbar__item">Registrate</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
