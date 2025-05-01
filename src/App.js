import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './App.scss';

/**
 * Componente principal de la aplicación
 * Configura las rutas y estructura básica de la aplicación
 */
function App() {
  return (
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
      <Route
        path="/privacy-policy"
        element={
          <MainLayout>
            <div className="container" style={{ padding: '100px 0' }}>
              <h1>Política de Privacidad</h1>
              <p>
                Esta página de política de privacidad está pendiente de
                creación.
              </p>
            </div>
          </MainLayout>
        }
      />
      <Route
        path="/terms-of-service"
        element={
          <MainLayout>
            <div className="container" style={{ padding: '100px 0' }}>
              <h1>Términos de Servicio</h1>
              <p>
                Esta página de términos de servicio está pendiente de creación.
              </p>
            </div>
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <div
              className="container"
              style={{ padding: '100px 0', textAlign: 'center' }}
            >
              <h1>404 - Página no encontrada</h1>
              <p>La página que buscas no existe.</p>
            </div>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
