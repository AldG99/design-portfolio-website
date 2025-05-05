import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
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
