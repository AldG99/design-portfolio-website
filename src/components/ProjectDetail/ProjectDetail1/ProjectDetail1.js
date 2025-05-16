import React, { useEffect } from 'react';
import './ProjectDetail1.scss';

const ProjectDetail1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Portafolio | Proyecto 1';
  }, []);

  return (
    <main className="project-detail">
      <div className="container">
        <header className="project-detail__hero">
          <h1 className="section-title">Proyecto 1</h1>
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
      </div>
    </main>
  );
};

export default ProjectDetail1;
