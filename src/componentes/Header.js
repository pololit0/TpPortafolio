import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/Creaciones"> Creaciones</Link>
        <Link to="/Info">Sobre mi</Link>
        <Link to="/Favoritos">Favoritos</Link>
      </div>
    </div>
  );
}

export default Header;

