// Por ejemplo, en MisCreaciones.js
import React from 'react';
import Trabajo from './Trabajo';
import { useFavoritos } from '../FavoritosContext';

function MisCreaciones({ creaciones }) {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <div className="mis-creaciones">
      <h2>Mis Creaciones</h2>
      {creaciones.map((creacion) => (
        <Trabajo
          key={creacion.id}
          creacion={creacion}
          esFavorito={favoritos.includes(creacion.id)}
          onToggleFavorito={() => toggleFavorito(creacion.id)}
        />
      ))}
    </div>
  );
}

export default MisCreaciones;
