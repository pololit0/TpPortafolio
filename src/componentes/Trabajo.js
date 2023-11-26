// Trabajo.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Trabajo.css';

function Trabajo({ creacion, esFavorito, onToggleFavorito }) {
  return (
    <div className="trabajo">
      <h3>{creacion.nombre}</h3>
      <p>{creacion.descripcion}</p>
      <p>Fecha: {creacion.fecha}</p>
      <img src={creacion.imagenes} alt="Imagen de trabajo" className="imagen-trabajo" />

      {/* GitHub icon with a larger size */}
      <a href={creacion.link} target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
      </a>

      {/* Button with updated design */}
      <button onClick={onToggleFavorito} className={esFavorito ? 'favorito' : 'no-favorito'}>
        {esFavorito ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
}

export default Trabajo;
