import React from 'react';

function Trabajo({ trabajo }) {
  return (
    <div className="trabajo">
      <h3>{trabajo.nombre}</h3>
      <p>{trabajo.descripcion}</p>
      <p>Fecha: {trabajo.fecha}</p>
      <a href={trabajo.link} target="_blank" rel="noopener noreferrer">
        Ver en GitHub
      </a>
    </div>
  );
}

export default Trabajo;