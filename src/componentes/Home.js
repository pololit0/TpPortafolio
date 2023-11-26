import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MisCreaciones from './Creaciones';
import { useFavoritos } from '../FavoritosContext';
import './Home.css';

function Home() {
  const { favoritos, toggleFavorito } = useFavoritos();
  const [creaciones, setCreaciones] = useState([]);

  useEffect(() => {
    axios.get('./Trabajos.json')
      .then((response) => setCreaciones(response.data))
      .catch((error) => console.error('Error al cargar los datos:', error));
  }, []);

  // Obtén solo los primeros 6 trabajos
  const primerosSeisTrabajos = creaciones.slice(0, 6);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Trabajos Destacados</h1>
      </div>
      <div className="home-content">
        <MisCreaciones creaciones={primerosSeisTrabajos} favoritos={favoritos} onToggleFavorito={toggleFavorito} />
      </div>
    </div>
  );
}

export default Home;
