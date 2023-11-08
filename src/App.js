import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home'
import Favoritos from './componentes/Favoritos'
import Footer from './componentes/Footer';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={< Favoritos/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;