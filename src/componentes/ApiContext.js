
import React, { createContext, useContext, useState } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (proyecto) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, proyecto]);
  };

  const quitarFavorito = (proyectoId) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((proyecto) => proyecto.id !== proyectoId));
  };

  const contextValue = {
    favoritos,
    agregarFavorito,
    quitarFavorito,
  };

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi debe utilizarse dentro de un ApiProvider');
  }
  return context;
};
