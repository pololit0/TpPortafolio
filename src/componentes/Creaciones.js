import React from 'react';
import Trabajo from './Trabajo.js'; // Asegúrate de la ruta correcta

function MisCreaciones({ creaciones }) {
  return (
    <div className="mis-creaciones">
      <h2>Mis Creaciones</h2>
      {creaciones && creaciones.map((trabajo) => (
        <Trabajo key={trabajo.id} trabajo={trabajo} />
      ))}
    </div>
  );
}

export default MisCreaciones;