// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Favoritos from './componentes/Favoritos';
import Footer from './componentes/Footer';
import TodasLasCreaciones from './componentes/TodasLasCreaciones';
import { FavoritosProvider } from './FavoritosContext';

function App() {
  return (
    <Router>
      <FavoritosProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creaciones" element={<TodasLasCreaciones />} />
            <Route path="/favs" element={<Favoritos />} />
          </Routes>
          <Footer />
        </div>
      </FavoritosProvider>
    </Router>
  );
}

export default App;
