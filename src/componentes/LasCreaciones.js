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

  return (
    <div>
      <h1>Mis Creaciones</h1>
      <MisCreaciones creaciones={creaciones} />
    </div>
  );
}

export default TodasLasCreaciones;