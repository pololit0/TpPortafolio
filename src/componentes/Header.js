import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap'; // Asegúrate de tener react-bootstrap instalado

import './Header.css';
import { useFavoritos } from '../FavoritosContext';

function Header() {
  const { favoritos } = useFavoritos();

  return (
    <div className="header">
      <div className="logo">
        {/* Aquí puedes poner tu logo */}
      </div>
      <div className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/creaciones"> Creaciones</Link>
        <Link to="/Info">Sobre mi</Link>
        <Link to="/favs">
          Favoritos{' '}
          {favoritos.length > 0 && (
            <Badge pill variant="danger">
              {favoritos.length}
            </Badge>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Header;
