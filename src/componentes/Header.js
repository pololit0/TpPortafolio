import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Importa tu imagen


function Header() {
  return (
    <div className="header">
      
      <div className="logo">
        
      </div>
      <div className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/creaciones"> Creaciones</Link>
        <Link to="/Info">Sobre mi</Link>
        <Link to="/favs">Favoritos</Link>
      </div>
    </div>
  );
}

export default Header;


