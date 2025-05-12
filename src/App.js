import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProjectDetail4 from './components/ProjectDetail/ProjectDetail4/ProjectDetail4';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Cambiado de /projects a /trabajo */}
            <Route path="/trabajo" element={<Projects />} />

            {/* Rutas específicas para cada proyecto basadas en su slug */}
            <Route path="/inventa-analyt" element={<ProjectDetail4 />} />

            {/* Ruta genérica para otros proyectos */}
            <Route path="/:projectSlug" element={<ProjectDetail4 />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
