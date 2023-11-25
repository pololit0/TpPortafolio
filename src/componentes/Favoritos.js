import React, { useState, useEffect } from 'react';
import MisCreaciones from './Creaciones';
import { useFavoritos } from '../FavoritosContext';
import axios from 'axios'; // Asegúrate de importar axios si no lo has hecho

function Favoritos() {
  const { favoritos } = useFavoritos();
  const [creaciones, setCreaciones] = useState([]); // Estado local para almacenar las creaciones

  useEffect(() => {
    // Aquí puedes realizar una llamada a una API o usar un estado global/contexto para obtener las creaciones
    axios.get('./Trabajos.json')
      .then((response) => setCreaciones(response.data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []); // Asegúrate de ajustar las dependencias según tu lógica específica

  // Filtra las creaciones según los favoritos
  const creacionesFavoritas = creaciones.filter((creacion) => favoritos.includes(creacion.id));

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <MisCreaciones creaciones={creacionesFavoritas} favoritos={favoritos} />
    </div>
  );
}

export default Favoritos;