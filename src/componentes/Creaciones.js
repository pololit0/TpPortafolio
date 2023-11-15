import React from 'react';
import Trabajo from './Trabajo'; // Asegúrate de la ruta correcta

function MisCreaciones({ creaciones }) {
  return (
    <div className="mis-creaciones">
      <h2>Mis Creaciones</h2>
      {creaciones.map((creacion) => (
        <Trabajo key={creacion.id} trabajo={creacion} />
      ))}
    </div>
  );
}

export default MisCreaciones;