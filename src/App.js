import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import ProjectDetailSwitch from './components/ProjectDetail/ProjectDetailSwitch';
import { ScrollRevealProvider } from './context/ScrollRevealContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // Importamos el nuevo componente
import './App.scss';

const App = () => {
  return (
    <Router>
      <ScrollRevealProvider>
        <ScrollToTop />
        <div className="app">
          <Header />
          <div className="app__content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trabajo" element={<Projects />} />
              <Route path="/:projectSlug" element={<ProjectDetailSwitch />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollRevealProvider>
    </Router>
  );
};

export default App;
