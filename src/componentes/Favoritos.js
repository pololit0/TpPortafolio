// Favoritos.js
import React, { useState, useEffect } from 'react';
import MisCreaciones from './Creaciones';
import { useFavoritos } from '../FavoritosContext';
import './Favoritos.css'; // Import the new CSS file
import axios from 'axios';

function Favoritos() {
  const { favoritos } = useFavoritos();
  const [creaciones, setCreaciones] = useState([]); 

  useEffect(() => {
    axios.get('./Trabajos.json')
      .then((response) => setCreaciones(response.data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  const creacionesFavoritas = creaciones.filter((creacion) => favoritos.includes(creacion.id));

  return (
    <div className="container">
      <h1 className="title">Mis Favoritos</h1>
      <MisCreaciones creaciones={creacionesFavoritas} favoritos={favoritos} />
    </div>
  );
}

export default Favoritos;
