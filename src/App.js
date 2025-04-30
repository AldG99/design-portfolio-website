import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/project/:id"
          element={
            <MainLayout>
              <ProjectDetail />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
