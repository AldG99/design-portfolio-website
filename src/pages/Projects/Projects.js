// ARCHIVO MODIFICADO: src/pages/Projects/Projects.js
// Este archivo ha sido modificado para implementar la animación scroll reveal en la página de Trabajo

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects, getProjectSlug } from '../../data/projectsIndex';
// NUEVO: Importar el hook useScrollReveal
import { useScrollReveal } from '../../context/ScrollRevealContext';
import './Projects.scss';

const Projects = () => {
  // NUEVO: Usar el hook para obtener la referencia de animación
  const { revealRef } = useScrollReveal();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Set document title
    document.title = 'Portafolio | Trabajo';
    // Get all projects and sort by date (newest first)
    const allProjects = getAllProjects();
    // Asegúrate de que todos los proyectos tengan las propiedades necesarias
    const processedProjects = allProjects.map(project => ({
      ...project,
      title: project.title || `Proyecto ${project.id}`,
      shortDescription:
        project.shortDescription || 'Sin descripción disponible',
      date: project.date || 'Sin fecha',
      tools: project.tools || [],
      thumbnail: project.thumbnail || '/assets/images/placeholder.jpg',
      dateRaw: project.dateRaw || new Date().toISOString(),
    }));
    const sortedProjects = [...processedProjects].sort(
      (a, b) => new Date(b.dateRaw) - new Date(a.dateRaw)
    );
    setProjects(sortedProjects);
  }, []);

  return (
    <main className="projects-page">
      <div className="container">
        {/* NUEVO: Añadir título con efecto de reveal */}
        <h1 className="projects-page__title" ref={revealRef}>
          Proyectos
        </h1>

        <div className="projects-page__list">
          {projects.map((project, index) => (
            <div
              className="project-item"
              key={project.id}
              /* NUEVO: Añadir ref y delay para cada proyecto */
              ref={revealRef}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/${getProjectSlug(project.title)}`}
                className="project-item__thumbnail-link"
              >
                <div className="project-item__thumbnail">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    draggable="false"
                    className="no-save"
                    onContextMenu={e => e.preventDefault()}
                  />
                </div>
              </Link>
              <div className="project-item__content">
                <div className="project-item__date">{project.date}</div>
                <h3 className="project-item__title">{project.title}</h3>
                <p className="project-item__description">
                  {project.shortDescription}
                </p>
                <div className="project-item__tools">
                  {/* Verificar que project.tools existe y es un array */}
                  {Array.isArray(project.tools) && project.tools.length > 0 ? (
                    project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`project-item__tool project-item__tool--${tool
                          .toLowerCase()
                          .replace(/\s+/g, '-')}`}
                      >
                        {tool}
                      </span>
                    ))
                  ) : (
                    <span className="project-item__tool">
                      Sin tecnologías especificadas
                    </span>
                  )}
                </div>
                <Link
                  to={`/${getProjectSlug(project.title)}`}
                  className="project-item__button"
                >
                  Ver proyecto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
