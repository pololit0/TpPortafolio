// TodasLasCreaciones.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MisCreaciones from './Creaciones';
import './TodasLasCreaciones.css'; // Import the new CSS file

function TodasLasCreaciones() {
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    axios.get('./Trabajos.json')
      .then((response) => setCreaciones(response.data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  const handleToggleFavorito = (id) => {
    setCreaciones((prevCreaciones) =>
      prevCreaciones.map((creacion) =>
        creacion.id === id ? { ...creacion, favorito: !creacion.favorito } : creacion
      )
    );
  };

  return (
    <div className="container">
      <MisCreaciones creaciones={creaciones} onToggleFavorito={handleToggleFavorito} />
    </div>
  );
}

export default TodasLasCreaciones;
