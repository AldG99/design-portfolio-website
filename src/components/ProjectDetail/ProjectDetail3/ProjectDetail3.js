import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail3.scss';

const ProjectDetail3 = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = 'Portafolio | Proyecto 3';
  }, []);

  return (
    <main className="project-detail">
      <div className="container">
        <header className="project-detail__hero">
          <h1 className="section-title">Proyecto 3</h1>
          <p className="project-detail__subtitle">
            Este proyecto está en desarrollo
          </p>
        </header>

        <section className="project-detail__overview">
          <h2 className="section-subtitle">Información</h2>
          <p className="overview-text">
            Estamos trabajando en este proyecto. Pronto habrá más información
            disponible.
          </p>
        </section>

        {/* Back to projects */}
        <section className="project-detail__navigation">
          <Link to="/trabajo" className="btn btn--outline">
            ← Volver a todos los proyectos
          </Link>
          <Link to="/" className="btn">
            Ir al inicio
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail3;
