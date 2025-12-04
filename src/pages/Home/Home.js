import React, { useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedProjects from '../../components/FeaturedProjects/FeaturedProjects';
import './Home.scss';

/**
 * Componente principal de la página de inicio
 * Muestra la sección hero y los proyectos destacados
 */
const Home = () => {
  // useEffect se ejecuta después de que el componente se monte
  useEffect(() => {
    // Hace scroll hacia arriba de la página cuando el componente se carga
    // Útil para asegurar que el usuario vea el contenido desde el inicio
    window.scrollTo(0, 0);

    // Establece el título de la pestaña del navegador
    // Importante para SEO y experiencia de usuario
    document.title = 'Alfredo García — Diseñador UX/UI & Desarrollador';
  }, []); // Array vacío significa que solo se ejecuta una vez al montar el componente

  return (
    // Contenedor principal de la página usando la etiqueta semántica main
    <main className="home">
      {/* Sección hero - generalmente contiene el contenido principal y llamativo */}
      <HeroSection />

      {/* Sección de proyectos destacados - muestra los trabajos más importantes */}
      <FeaturedProjects />
    </main>
  );
};

// Exporta el componente para que pueda ser importado en otros archivos
export default Home;
