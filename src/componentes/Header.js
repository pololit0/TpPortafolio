import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// Importa tu imagen


function Header() {
  return (
    <div className="header">
      
      <div className="logo">
        <img src= "miFoto.JPG" alt="Mi Foto" style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/todas-las-creaciones"> Creaciones</Link>
        <Link to="/Info">Sobre mi</Link>
        <Link to="/Favoritos">Favoritos</Link>
      </div>
    </div>
  );
}

export default Header;


