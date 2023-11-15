import React from 'react';
import Contacto from './Contacto';

import './Footer.css'; // Agrega un archivo de estilos para Footer

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* Otro contenido del Footer */}
        <Contacto />
      </div>
    </div>
  );
}

export default Footer;
