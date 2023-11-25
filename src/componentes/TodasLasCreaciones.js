// TodasLasCreaciones.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MisCreaciones from './Creaciones';

function TodasLasCreaciones() {
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    axios.get('./Trabajos.json')
      .then((response) => setCreaciones(response.data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  const handleToggleFavorito = (id) => {
    // Cambiar el estado de "favorito" para el trabajo con el ID correspondiente
    setCreaciones((prevCreaciones) =>
      prevCreaciones.map((creacion) =>
        creacion.id === id ? { ...creacion, favorito: !creacion.favorito } : creacion
      )
    );
  };

  return (
    <div>
      <MisCreaciones creaciones={creaciones} onToggleFavorito={handleToggleFavorito} />
    </div>
  );
}

export default TodasLasCreaciones;
