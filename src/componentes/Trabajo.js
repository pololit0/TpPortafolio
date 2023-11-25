import React from 'react';

function Trabajo({ creacion, esFavorito, onToggleFavorito }) {
  return (
    <div className="trabajo">
      <h3>{creacion.nombre}</h3>
      <p>{creacion.descripcion}</p>
      <p>Fecha: {creacion.fecha}</p>
      <img src={creacion.imagenes} alt="Imagen de trabajo" className="imagen-trabajo" />
      <a href={creacion.link} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
      <button onClick={onToggleFavorito}>
        {esFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
}

export default Trabajo;
