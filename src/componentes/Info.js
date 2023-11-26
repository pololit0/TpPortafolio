// InfoPersonal.js

import React from 'react';
import './InfoPersonal.css';

function InfoPersonal() {
  return (
    <div className="info-personal-container">
      <img src="Foto.jpg" alt="Mi Foto" className="foto-personal" />
      <div className="info-texto">
        <h2>¡Hola! Soy Lorenzo Shammah Zalba un estudiante de ORT en la orientación de Informática.</h2>
        <p>
          No dudes en explorar mi trabajo y proyectos.
        </p>
      </div>
    </div>
  );
}

export default InfoPersonal;
